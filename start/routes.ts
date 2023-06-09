/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { Response } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    
    Route.post('reclamacao', 'ReclamacaosController.store')
    Route.get('reclamacao', 'ReclamacaosController.index')
    Route.get('reclamacao/:id', 'ReclamacaosController.destroy')

    
    Route.post('bypass','RelatoriosController.bypass' )
    Route.get('duty/:tipo/:search','RelatoriosController.duty' )
    Route.get('relatorio/:user_id', 'RelatoriosController.getMine')
    Route.delete('excluir_relatorio/:uuid', 'RelatoriosController.deleteOne')
    Route.get('relatorios', 'RelatoriosController.getAll')
    Route.post('relatorio', 'RelatoriosController.create')

    Route.get('offline', 'UsersController.getOffline')
    Route.get('online', 'UsersController.getOnline')
    Route.get('counts/:acronimo?', 'AtividadesController.countDuty' )
    Route.get('atividades', 'AtividadesController.getAll' )

    Route.post('resetupdate/:id', 'UsersController.resetupdate')
    Route.post('reset', 'UsersController.reset')
    Route.get('user/:tipo/:search', 'UsersController.oneUser')
    Route.put('update_user/:id', 'UsersController.updateOne')
    Route.delete('one/:id', 'UsersController.deleteOne')
 

     
    Route.get('logout/:id?', 'UsersController.logout')
    Route.get('users', 'UsersController.getUsers')
    Route.post('login','UsersController.login')
    Route.post('registro','UsersController.postUsers' )
  
}).prefix('/api')
 


