import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Relatorio from 'App/Models/Relatorio'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method


    await Relatorio.createMany([{
      "id": 1,
      "nome": "teste", 
      "user_id": 3,
      "atividade_id": 2
    },
    {
      "id": 2,
      "nome": "teste 1", 
      "user_id": 2,
      "atividade_id": 3
    },
    {
      "id": 3,
      "nome": "teste 2", 
      "user_id": 2,
      "atividade_id": 4
    },
    {
      "id": 4,
      "nome": "teste 1", 
      "user_id": 4,
      "atividade_id": 1
    },
    {
      "id": 5,
      "nome": "teste 2", 
      "user_id": 4,
      "atividade_id": 2
    }])
  }
}
