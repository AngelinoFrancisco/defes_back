import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StockEmpresaSeg from 'App/Models/StockEmpresaSeg'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await StockEmpresaSeg.createMany([
      {
        "id": 1, 
        "arma_id": 3, 
        "empresa_seg_id": 1
      },
      {
        "id": 2, 
        "arma_id": 23, 
        "empresa_seg_id": 2
      },
      {
        "id": 3, 
        "arma_id": 24, 
        "empresa_seg_id": 3
      }
    ])
  }
}
