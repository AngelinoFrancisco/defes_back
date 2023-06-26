import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atividade from 'App/Models/Atividade'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Atividade.createMany([
      {
        "id": 1, 
        "nome": "vulnerabilities", 
        "acronimo": "vulnerabilities",
        "quant":10
      },
      {
        "id": 2, 
        "nome": "subdomains", 
        "acronimo": "subdomains",
        "quant":5
      },
      {
        "id": 3, 
        "nome": "portscan", 
        "acronimo":"portscan",
        "quant":20
      },
      {
        "id": 4, 
        "nome": "technologies", 
        "acronimo":"technologies",
        "quant":7
      },
      {
        "id": 5, 
        "nome": "clickjacking", 
        "acronimo":"clickjacking",
        "quant":15
      }
    ])
  }
}
