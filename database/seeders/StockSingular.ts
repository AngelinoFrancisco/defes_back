import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockSingular from 'App/Models/StockSingular'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await StockSingular.createMany([
      {
        "id": 1, 
        "arma_id": 8, 
        "singular_id": 1
      },
      {
        "id": 2, 
        "arma_id": 9, 
        "singular_id": 2
      }
    ])
  }
}
