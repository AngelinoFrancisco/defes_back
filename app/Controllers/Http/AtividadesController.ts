import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atividade from 'App/Models/Atividade'

export default class AtividadesController {

    public async getAll({response, auth}: HttpContextContract){

        const isAuthenticated =  await auth.use('api').check()

        if(isAuthenticated){
            const duties = await Atividade.all()
           return  response.status(200).send(duties)
        }else{
            return ' não autenticado'

        }

        
    }

    
    public async countDuty({response, auth, params}: HttpContextContract){
 

        const isAuthenticated =  await auth.use('api').check()
        
        const acronimo = params.acronimo


        if(isAuthenticated){

            const duty = await Atividade.findBy('acronimo', acronimo)

            duty!.quant  +=  1
            duty!.save()

           return  response.status(200).send(duty)
        }else{
            return ' não autenticado'

        }

        
    }




}
