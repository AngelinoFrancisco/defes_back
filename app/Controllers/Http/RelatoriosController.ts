import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'
import Relatorio from 'App/Models/Relatorio'

export default class RelatoriosController {

    public async getMine({ params, response, auth}:HttpContextContract){
        const user_id = params.user_id
        const isAuthenticated = await auth.use('api').check()

        if(isAuthenticated){
            const Duties = await Relatorio.query().where("user_id", user_id) 
            if(!Duties  || Duties== undefined || Duties == null   ){ 
                return response.status(200).send(false)
            } 
            return response.status(200).send(Duties)

        }

        return response.status(404).send(false)

    }


    public async getAll({auth, response, request}:HttpContextContract){

        const isAuthenticated = await auth.use('api').check()

        if(isAuthenticated){
            const Duties = await Relatorio.all() 
            if(!Duties  || Duties== undefined || Duties == null   ){ 
                return response.status(200).send(false)
            } 
            return response.status(200).send(Duties)

        }

        return response.status(404).send(false)




    }

    public async create({request, response}:HttpContextContract){
        const test = request.input('test')

        const getAtivity = await Atividade.findBy('acronimo', test)

        if(getAtivity){ 
            const newDuty = {
                nome:request.input('nome'),
                user_id:request.input('user_id'),
                uuid:request.input('uuid'),
                atividade_id:getAtivity.id
    
            }

            await Relatorio.create(newDuty).then((result)=>{

                response.status(200).send(result)

            }).catch((errors)=>{
                response.status(404).send(errors)

            }) 
        } 
    }

    public async deleteOne({response, params, auth}:HttpContextContract){
        
        const uuid = params.uuid 

        const isAuthenticated = await auth.use('api').check()

        if(isAuthenticated){
            const Duty = await Relatorio.findBy('uuid', uuid)
            if(!Duty || Duty === undefined || Duty === null){
                return response.status(200).send(false)
            }
            Duty.delete() 
            return response.status(200).send(true)
        }else{
            return response.status(404).send(false)
        }


    }
}
