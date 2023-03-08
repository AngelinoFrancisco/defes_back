import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Singular from 'App/Models/Singular'
export default class SingularsController {

    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await Singular.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const singulars = await Singular.all()

        response.status(200).send(singulars)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const singulars = await Singular.find(params.id)
        if(singulars){
            singulars.merge(request.only([
                'nome',
                'bi',
                'telefone', 
                'genero', 
                'usuario_id'
            ]))
            singulars.save()
            console.log("usuario atualizado!")
            response.status(200).send(singulars)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const singulars = await Singular.find(params.id)
        if(singulars){
            singulars.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(singulars)
        }else{
            console.log('erro no id passado')

        }

    }
}
