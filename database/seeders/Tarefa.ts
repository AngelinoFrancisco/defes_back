import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tarefa from 'App/Models/Tarefa'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Tarefa.createMany([{
      "id": 1,
      "user_id": 3,
      "atividade_id": 2
    },
    {
      "id": 2, 
      "user_id": 2,
      "atividade_id": 3
    },
    {
      "id": 3, 
      "user_id": 2,
      "atividade_id": 4
    },
    {
      "id": 4, 
      "user_id": 4,
      "atividade_id": 1
    },
    {
      "id": 5, 
      "user_id": 4,
      "atividade_id": 2
    }])
  }
}
