import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {

    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await Usuario.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const usuarios = await Usuario.all()

        response.status(200).send(usuarios)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const usuarios = await Usuario.find(params.id)
        if(usuarios){
            usuarios.merge(request.only(['nome','quantidade','unidade']))
            usuarios.save()
            console.log("usuario atualizado!")
            response.status(200).send(usuarios)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const usuarios = await Usuario.find(params.id)

        if(usuarios){
            usuarios.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(usuarios)
        }else{
            console.log('erro no id passado')

        }

    }

}
