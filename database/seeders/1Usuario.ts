import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class extends BaseSeeder {
  public static environment = ['development','testing']
  public async run () {
    
    await Usuario.createMany([
      {
        "id":1,
        "nome": "Gustavo",
        "senha": "f1hj73k8",
        "email": "gustavo@example.com",
        "tipo": "logistica",
        "is_admin": true
        },
        {
          "id":2,
          "nome": "Juliana",
          "senha": "dn8f6ka7",
          "email": "juliana@example.com",
          "tipo": "dispo",
          "is_admin": true
          },
          {
            "id":3,
            "nome": "Rodrigo",
            "senha": "g8j1d9f5",
            "email": "rodrigo@example.com",
            "tipo": "orgao",
            "is_admin": false
            },
            {
              "id":4,
              "nome": "Camila",
              "senha": "e5fj2d6a",
              "email": "camila@example.com",
              "tipo": "comando_provincial",
              "is_admin": false
              },
              {
                "id":5,
                "nome": "Luciana",
                "senha": "c4j9f8k2",
                "email": "luciana@example.com",
                "tipo": "dinique",
                "is_admin": false
                }
    ])

  }
}
