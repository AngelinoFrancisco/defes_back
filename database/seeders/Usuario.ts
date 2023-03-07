import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class extends BaseSeeder {
  public static environment = ['development','testing']
  public async run () {
    
    await Usuario.createMany([
      {
        "nome": "Gustavo",
        "senha": "f1hj73k8",
        "email": "gustavo@example.com",
        "tipo": "gerente",
        "is_admin": true
        },
        {
          "nome": "Juliana",
          "senha": "dn8f6ka7",
          "email": "juliana@example.com",
          "tipo": "cliente",
          "is_admin": false
          },
          {
            "nome": "Rodrigo",
            "senha": "g8j1d9f5",
            "email": "rodrigo@example.com",
            "tipo": "administrador",
            "is_admin": false
            },
            {
              "nome": "Camila",
              "senha": "e5fj2d6a",
              "email": "camila@example.com",
              "tipo": "cliente",
              "is_admin": false
              },
              {
                "nome": "Luciana",
                "senha": "c4j9f8k2",
                "email": "luciana@example.com",
                "tipo": "gerente",
                "is_admin": false
                }
    ])

  }
}
