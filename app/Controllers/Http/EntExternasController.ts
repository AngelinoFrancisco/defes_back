import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EntExterna from 'App/Models/EntExterna'

export default class EntExternasController {

    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await EntExterna.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const entexternas = await EntExterna.all()

        response.status(200).send(entexternas)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const entexternas = await EntExterna.find(params.id)
        if(entexternas){
            entexternas.merge(request.only([
                'nome', 
                'localizacao',  
                'usuario_id'
            ]))
            entexternas.save()
            console.log("usuario atualizado!")
            response.status(200).send(entexternas)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const entexternas = await EntExterna.find(params.id)

        if(entexternas){
            entexternas.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(entexternas)
        }else{
            console.log('erro no id passado')

        }

    }

}
