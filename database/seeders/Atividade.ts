import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atividade from 'App/Models/Atividade'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Atividade.createMany([
      {
        "id": 1, 
        "nome": "Vulnerabilidades", 
        "acronimo": "vulnerabilities",
        "quant":25
      },
      {
        "id": 2, 
        "nome": "Subdominios", 
        "acronimo": "subdomains",
        "quant":5
      },
      {
        "id": 3, 
        "nome": "Varredura de Porta", 
        "acronimo":"portscan",
        "quant":30
      },
      {
        "id": 4, 
        "nome": "Technologias", 
        "acronimo":"technologies",
        "quant":50
      },
      {
        "id": 5, 
        "nome": "Clickjancking", 
        "acronimo":"clickjacking",
        "quant":15
      }
    ])
  }
}
