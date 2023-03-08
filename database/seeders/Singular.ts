import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Singular from 'App/Models/Singular'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Singular.createMany([
      {
        "id": 1,
        "nome": "João Silva",
        "bi": "123456789",
        "telefone": "912345678",
        "genero": "Masculino",
        "usuario_id": 2
      },
      {
        "id": 2,
        "nome": "Ana Santos",
        "bi": "987654321",
        "telefone": "921234567",
        "genero": "Feminino",
        "usuario_id": 2
      },
      {
        "id": 3,
        "nome": "Mário Costa",
        "bi": "24681012",
        "telefone": "911234567",
        "genero": "Masculino",
        "usuario_id": 2
      },
      {
        "id": 4,
        "nome": "Sofia Ferreira",
        "bi": "12162024",
        "telefone": "931234567",
        "genero": "Feminino",
        "usuario_id": 2
      }, {
        "id": 5,
        "nome":"Ricardo Carvalho",
        "bi": "222333444",
        "telefone": "961234567",
        "genero": "Masculino",
        "usuario_id": 2
      }]
    )

  }
}
