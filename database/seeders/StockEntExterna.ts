import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockEntExterna from 'App/Models/StockEntExterna'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method


    await StockEntExterna.createMany([
      {
        "id": 1, 
        "arma_id": 21, 
        "ent_externa_id": 1
      },
      {
        "id": 2, 
        "arma_id": 22, 
        "ent_externa_id": 2
      },
      {
        "id": 3, 
        "arma_id": 4, 
        "ent_externa_id": 2
      }
    ])
  }
}
