import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Frequencia from 'App/Models/Frequencia'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Frequencia.createMany([
      {
        "id": 1,
        "user_id": 1
      },
      {
        "id": 2, 
        "user_id": 2
      },
      
      {
        "id": 3, 
        "user_id": 3
      },
      
      {
        "id": 4, 
        "user_id": 4
      },
      
      {
        "id": 5, 
        "user_id": 5
      }
    ])
  }
}
