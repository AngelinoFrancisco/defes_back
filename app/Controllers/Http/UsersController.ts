import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import Frequencia from 'App/Models/Frequencia'
import { DateTime } from 'luxon'



export default class UsersController {

    public async reset({response, request}:HttpContextContract){
        const {email,bipassrecover} =  request.all()

        const user = await User.findBy('email',email )

        if(user?.bipassrecover != bipassrecover){
          return  response.status(404).send(false)
        }else{
            return response.status(200).send(user)

        }
    }



    public async resetupdate({response, request, params}:HttpContextContract){
         
 
        const users = await User.find(params.id)
        if(users){ 
            users.merge(request.only(['nome', 'password', 'bipassrecover','email']))
            users.save()
            console.log("usuario atualizado!")
            response.status(200).send(users)

        }else{
            response.status(404).send(false)
        }       

       

    }
    public async getOnline({ response, auth }: HttpContextContract) {


        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {

            const users = await User.query().where('is_online', true)
            const freqs = await Frequencia.all()
            const onlines = new Array()

            users.forEach(user => {
                freqs.forEach(online => {
                    if (user.id == online.user_id) {
                        onlines.push(online)
                    }
                })
            })


            response.status(200).send(onlines)
        } else {
            return ' não autenticado'
        }



    }

    public async getOffline({ response, auth }: HttpContextContract) {


        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {

            const users = await User.query().where('is_online', false)
            const freqs = await Frequencia.all()
            const offlines = new Array()

            users.forEach(user => {

                freqs.forEach(off => {
                    if (user.id == off.user_id) {

                        offlines.push(off)

                    }
                })

            })

            response.status(200).send(offlines)
        } else {
            return ' não autenticado'
        }



    }

    public async updateOne({ response, auth, params, request }: HttpContextContract) {
        const id = params.id
        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {

            const user = await User.find(id)
            if (!user) {
                return response.status(200).send(false)
            }
            //const result =  await User.updateOrCreate('id':id, request.only(['nome', 'email', 'bipassrecover', 'password', 'is_admin']) )
          
            //console.log(result)
             user.merge(request.only(['nome', 'email', 'bipassrecover', 'password', 'is_admin']))
            user.save()
            return response.status(200).send(true)
        } else {
            return response.status(404).send(false)
        }

    }

    public async deleteOne({ request, response, auth, params }: HttpContextContract) {

        const id = params.id


        const isAuthenticated = await auth.use('api').check()

        // console.log(`checked: ${checked} isAuthenticated: ${isAuthenticated}`)
        if (isAuthenticated) {

            const user = await User.find(id)
            if (!user) {
                return response.status(200).send(false)
            }


            user?.delete()
            response.status(200).send(true)
        } else {
            return response.status(404).send(false)
        }

    }

    public async oneUser({ auth, response, params }: HttpContextContract) {
        const tipo = params.tipo
        const search = params.search

       // console.log('', tipo)
        //console.log('search', search)

        const isAuthenticated = await auth.use('api').check()

        if (isAuthenticated) {
            const user = await User.findBy(`${tipo}`, `${search}`)

            return response.status(200).send(user)

        } else {
            return response.status(404).send(false)
        }

    }

    public async getUsers({ response, auth }: HttpContextContract) {


        const isAuthenticated = await auth.use('api').check()

        // console.log(`checked: ${checked} isAuthenticated: ${isAuthenticated}`)
        if (isAuthenticated) {

            const users = await User.all()
            //console.log(users)
            response.status(200).send(users)
        } else {
            return ' não autenticado'
        }



    }

    public async login({ request, response, auth }: HttpContextContract) {
        const { email, password } = request.all()

        const user = await User.findBy('email', email)

        if (!user) {
            return response.status(404).json({ msg: "User not Found" })
        }

        const passwordVerified = await Hash.verify(user.password, password)


        if (!passwordVerified) {
            return response.status(404).json({ msg: "password does not combine" })
        }


        try {
            const newFreq = {
                user_id: user.id,
                created_at: DateTime.now(),
                updated_at: DateTime.now()
            }
            user.is_online = true
            user.save()
            await Frequencia.updateOrCreate({ user_id: user.id }, newFreq)
            const token = await auth.use('api').attempt(email, password)
            response.status(200).ok({ token, user })

        } catch (evt) {
            return response.unauthorized("invalid credentials")
        }

    }

    public async logout({ request, response, auth, params }: HttpContextContract) {


        const user_id = params.id

        const isAuthenticated = await auth.use('api').check()
        if (isAuthenticated) {
            const newFreq = {
                user_id: user_id,
                created_at: DateTime.now(),
                updated_at: DateTime.now()
            }

            const user = await User.findBy('id', user_id)
            user!.is_online = false
            user!.save()
            await Frequencia.updateOrCreate({ user_id: user_id }, newFreq)
            await auth.use('api').revoke().then(() => {
                response.status(200).json(true)
            }).catch((erros) => {
                response.status(404).json(erros)
            })
        } else {
            response.status(404).json('invalid token')
        }


    }

    public async postUsers({ request, response }: HttpContextContract) {

        const email = request.input('email')

        const user = await User.findBy('email', email)
        //  console.log(user)

        if (user) {
            // console.log('dentro', email)
            return response.status(200).json(true)
        }
        //  console.log('fora')
        const newUser = request.body()

        await User.create(newUser).then(() => {
            response.status(200).json(false)

        }).catch((evt) => {
            response.status(404).json(evt)
        })


    }


}
