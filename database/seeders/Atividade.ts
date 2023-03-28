import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atividade from 'App/Models/Atividade'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Atividade.createMany([
      {
        "id": 1, 
        "nome": "XSS SCRIPTING", 
        "acronimo": "xss",
        "quant":25
      },
      {
        "id": 2, 
        "nome": "Sub-Domains Finder", 
        "acronimo": "domains",
        "quant":5
      },
      {
        "id": 3, 
        "nome": "SQL INJECTION", 
        "acronimo":"sql",
        "quant":30
      },
      {
        "id": 4, 
        "nome": "PORT SCANNER", 
        "acronimo":"scanner",
        "quant":80
      }
    ])
  }
}
