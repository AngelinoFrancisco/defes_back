 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import Arma from 'App/Models/Arma'

export default class ArmasController {


    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await Arma.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const Armas = await Arma.all()

        response.status(200).send(Armas)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const Armas = await Arma.find(params.id)
        if(Armas){
            Armas.merge(request.only(['nome','quantidade','unidade']))
            Armas.save()
            console.log("usuario atualizado!")
            response.status(200).send(Armas)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const Armas = await Arma.find(params.id)

        if(Armas){
            Armas.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(Armas)
        }else{
            console.log('erro no id passado')

        }

    }



    
}
