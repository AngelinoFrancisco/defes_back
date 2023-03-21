import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'
import Relatorio from 'App/Models/Relatorio'

export default class RelatoriosController {


    public async getAll({}:HttpContextContract){



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
}
