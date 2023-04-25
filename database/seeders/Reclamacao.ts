import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import reclamacao from 'App/Models/Reclamacao'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await reclamacao.createMany([{
      "id": 1,
      "categoria": "outro", 
      "conteudo": "Rua do Comércio Rua do Comércio Rua do Comércio ",
      "user_id": 2
    },
    {
      "id": 2,
      "categoria": "falhas", 
      "conteudo": "Avenida Central Avenida Central Avenida Central ",
      "user_id": 3
    },
    {
      "id": 3,
      "categoria": "vulnerabilidades", 
      "conteudo": "Rua das Flores, Rua das Flores, Rua das Flores ",
      "user_id": 4
    },
    {
      "id": 4,
      "categoria": "Cafeteria da Maria", 
      "conteudo": "Praça da Cidade Praça da Cidade Praça da Cidade ",
      "user_id": 4
    },
    {
      "id": 5,
      "categoria": "Farmácia do José", 
      "conteudo": "Avenida da Libe Avenida da Libe Avenida da Libe nº 111",
      "user_id": 3
    }])
  }
}
