import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Efectivo from 'App/Models/Efectivo'

export default class EfectivosController {

    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await Efectivo.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const efectivos = await Efectivo.all()

        response.status(200).send(efectivos)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const efectivos = await Efectivo.find(params.id)
        if(efectivos){
            efectivos.merge(request.only([
                'nome',
                'nip',
                'patente', 
                'genero',
                'usuario_id'
            ]))
            efectivos.save()
            console.log("usuario atualizado!")
            response.status(200).send(efectivos)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const efectivos = await Efectivo.find(params.id)

        if(efectivos){
            efectivos.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(efectivos)
        }else{
            console.log('erro no id passado')

        }

    }





}
