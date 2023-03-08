import { DateTime } from 'luxon';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockEfectivo from 'App/Models/StockEfectivo'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await StockEfectivo.createMany([
      {
        "id": 1, 
        "arma_id": 2, 
        "efectivo_id": 1
      },
      {
        "id": 2, 
        "arma_id": 6,
        "efectivo_id": 2
      },
      {
        "id": 3, 
        "arma_id": 7, 
        "efectivo_id": 3
      }, 
    ])
  }
}
