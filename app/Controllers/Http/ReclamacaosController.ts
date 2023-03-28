 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import reclamacao from 'App/Models/Reclamacao'
import User from 'App/Models/User'
export default class ReclamacaosController {

    public async store({auth,response, request}:HttpContextContract){
        const isAuth = await auth.use('api').check()

        if(!isAuth){
            return response.status(404).send(false)
        }

        const body = request.body()

        await reclamacao.create(body).then(()=>{
            response.status(200).send(true)
        }).catch((erros)=>{
            response.status(500).send(false)
        })
    }

    
    public async destroy({auth,response, params}:HttpContextContract){
        const isAuth = await auth.use('api').check()

        if(!isAuth){
            return response.status(404).send(false)
        }

        const id = params.id

        await reclamacao.find(id).then(recall=>{
            recall?.delete()
            recall?.save()
            response.status(200).send(true)
        }).catch(erros=>{
            response.status(200).send(false)
        })



    }


    public async index({response, auth}:HttpContextContract){

        const users = new Array()

        const isAuth = await auth.use('api').check()

        if(!isAuth){
            return response.status(404).send(false)
        }
        const recall  = await reclamacao.all()
        const Users = await User.query().where('is_admin', false)


        Users.forEach(user =>{
            recall.forEach(call =>{
                if(user.id == call.user_id){
                    users.push(user)
                }
            })

        })

        response.status(200).send({
            recall:recall,
            users:users
        })
    }
}
