import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EntExterna from 'App/Models/EntExterna'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await EntExterna.createMany([{
      "id": 1,
      "nome": "Supermercado ABC", 
      "localizacao": "Rua do Comércio, nº 123",
      "usuario_id": 2
    },
    {
      "id": 2,
      "nome": "Loja de Roupas XYZ", 
      "localizacao": "Avenida Central, nº 456",
      "usuario_id": 2
    },
    {
      "id": 3,
      "nome": "Restaurante do João", 
      "localizacao": "Rua das Flores, nº 789",
      "usuario_id": 2
    },
    {
      "id": 4,
      "nome": "Cafeteria da Maria", 
      "localizacao": "Praça da Cidade, nº 10",
      "usuario_id": 2
    },
    {
      "id": 5,
      "nome": "Farmácia do José", 
      "localizacao": "Avenida da Liberdade, nº 111",
      "usuario_id": 2
    }])
  }
}
