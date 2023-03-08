import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EmpresaSeg from 'App/Models/EmpresaSeg'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await EmpresaSeg.createMany([{
      "id": 1,
      "nome": "Supermercado ABC",
      "nif": "123456789",
      "localizacao": "Rua do Comércio, nº 123",
      "usuario_id": 2
    },
    {
      "id": 2,
      "nome": "Loja de Roupas XYZ",
      "nif": "987654321",
      "localizacao": "Avenida Central, nº 456",
      "usuario_id": 2
    },
    {
      "id": 3,
      "nome": "Restaurante do João",
      "nif": "24681012",
      "localizacao": "Rua das Flores, nº 789",
      "usuario_id": 2
    },
    {
      "id": 4,
      "nome": "Cafeteria da Maria",
      "nif": "12162024",
      "localizacao": "Praça da Cidade, nº 10",
      "usuario_id": 2
    },
    {
      "id": 5,
      "nome": "Farmácia do José",
      "nif": "222333444",
      "localizacao": "Avenida da Liberdade, nº 111",
      "usuario_id": 2
    }]
    )

  }
}
