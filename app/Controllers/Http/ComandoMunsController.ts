import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext' 
import ComandoMun from 'App/Models/ComandoMun'


export default class ComandoMunsController {
 
    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await ComandoMun.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const comandoMun = await ComandoMun.all()

        response.status(200).send(comandoMun)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const comandoMun = await ComandoMun.find(params.id)
        if(comandoMun){
            comandoMun.merge(request.only([
                'nome',
                'municipio',
                'usuario_id' 
            ]))
            comandoMun.save()
            console.log("usuario atualizado!")
            response.status(200).send(comandoMun)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const comandoMun = await ComandoMun.find(params.id)

        if(comandoMun){
            comandoMun.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(comandoMun)
        }else{
            console.log('erro no id passado')

        }

    }





}
