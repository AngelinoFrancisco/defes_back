import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockUsuario from 'App/Models/StockUsuario' 

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await StockUsuario.createMany([
      {
        "id": 1, 
        "arma_id": 1,
        "usuario_id": 1
      },
      {
        "id": 2, 
        "arma_id": 10,
        "usuario_id": 1
      },
      {
        "id": 3, 
        "arma_id": 11,
        "usuario_id": 2
      },
      {
        "id": 4, 
        "arma_id": 12,
        "usuario_id": 2
      },
      {
        "id": 5, 
        "arma_id": 13,
        "usuario_id": 3
      },
      {
        "id": 6, 
        "arma_id": 14,
        "usuario_id": 3
      },
      {
        "id": 7, 
        "arma_id": 15,
        "usuario_id": 4
      },
      {
        "id": 8, 
        "arma_id": 16,
        "usuario_id": 4
      },
      {
        "id": 9, 
        "arma_id": 17,
        "usuario_id": 5
      },
      {
        "id": 10, 
        "arma_id": 18,
        "usuario_id": 5
      }
    ])
  }
}
