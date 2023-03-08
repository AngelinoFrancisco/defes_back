import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ComandoMun from 'App/Models/ComandoMun'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method


    await ComandoMun.createMany([{
      "id": 1,
      "nome": "Supermercado ABC", 
      "municipio": "Rua do Comércio, nº 123",
      "usuario_id": 4
    },
    {
      "id": 2,
      "nome": "Loja de Roupas XYZ", 
      "municipio": "Avenida Central, nº 456",
      "usuario_id": 4
    },
    {
      "id": 3,
      "nome": "Restaurante do João", 
      "municipio": "Rua das Flores, nº 789",
      "usuario_id": 4
    },
    {
      "id": 4,
      "nome": "Cafeteria da Maria", 
      "municipio": "Praça da Cidade, nº 10",
      "usuario_id": 4
    },
    {
      "id": 5,
      "nome": "Farmácia do José", 
      "municipio": "Avenida da Liberdade, nº 111",
      "usuario_id": 4
    }])
  }
}
