import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockComandoMun from 'App/Models/StockComandoMun' 

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await StockComandoMun.createMany([
      {
        "id": 1, 
        "arma_id": 5, 
        "comando_mun_id": 1
      },
      {
        "id": 2, 
        "arma_id": 19, 
        "comando_mun_id": 2
      },
      {
        "id": 3, 
        "arma_id": 20, 
        "comando_mun_id": 3
      }
    ])
  }
}
