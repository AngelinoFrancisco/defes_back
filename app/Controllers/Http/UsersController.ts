import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash' 
import Frequencia from 'App/Models/Frequencia'
import { DateTime } from 'luxon'



export default class UsersController {

    public async getUsers({response , auth}:HttpContextContract){

        await auth.use('api').check()
        const isAuthenticated =  auth.use('api').isLoggedIn
        if(isAuthenticated){

            const users = await User.all()
            response.status(200).send(users)
        }else{
            return ' não autenticado'
        }



    }

    public async login({request, response, auth}:HttpContextContract){
        const {email, password} = request.all() 

        const user = await User.findBy('email', email)
 
        if(!user){
            return response.status(404).json({msg:"User not Found"})
        }
        
         const passwordVerified = await Hash.verify( user.password, password)
 
        
        if(!passwordVerified){ 
            return response.status(404).json({msg:"password does not combine"})
        }
      
       
        try{ 
            const newFreq = {
                user_id:user.id,
                created_at:DateTime.now(),
                updated_at:DateTime.now()
            }            
            await Frequencia.updateOrCreate({user_id:user.id},newFreq)
          const token = await  auth.use('api').attempt(email,password)
          response.status(200).ok({token,user })
    
        }catch(evt){

           return  response.unauthorized("invalid credentials")
        }
            
    }
    public async logout({response, auth}:HttpContextContract){
        try{
            await auth.use('api').authenticate()
            await auth.use('api').revoke().then(()=>{
                console.log("entrou na api")
                response.status(200).json(true)
            }).catch((erros)=>{
                response.status(404).json(erros)
            })
        }catch(evt){

            response.status(404).json('invalid token')
        }

        
   
    }

    public async postUsers({request, response}:HttpContextContract){

        const email = request.input('email')

        const user = await User.findBy('email', email)
        console.log(user)

        if(user){
            console.log('dentro', email)
            return response.status(200).json(true)
        }
        console.log('fora')
        const newUser = request.body()
 
        await User.create(newUser).then(()=>{
            response.status(200).json(false)

        }).catch((evt)=>{
            response.status(404).json(evt)
        })
    
        
    }


}
