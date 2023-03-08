 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

 import EmpresaSeg from 'App/Models/EmpresaSeg'
export default class EmpresaSegsController {
    
    public async store({request,response}:HttpContextContract){
        const body = request.body()

       await EmpresaSeg.create(body).then(()=>{
            console.log('usuario criado com sucesso')
        }).catch(e=>{
            console.log(e)
        }) 
        response.status(200).send({msg:body})
    }


    public async index({response}:HttpContextContract){
        const empresasegs = await EmpresaSeg.all()

        response.status(200).send(empresasegs)
    }

    public async update({request,response,params}:HttpContextContract){ 
        const empresasegs = await EmpresaSeg.find(params.id)
        if(empresasegs){
            empresasegs.merge(request.only([
                'nome',
                'nif',
                'localizacao',  
                'usuario_id'
            ]))
            empresasegs.save()
            console.log("usuario atualizado!")
            response.status(200).send(empresasegs)

        }else{
            response.status(200).send({msg:"id não existe"})
        }
 

    }


    public async destroy({params,response}:HttpContextContract){
        const empresasegs = await EmpresaSeg.find(params.id)

        if(empresasegs){
            empresasegs.delete()
            console.log('usuario excluido com sucesso!')
            response.status(200).send(empresasegs)
        }else{
            console.log('erro no id passado')

        }

    }





}
