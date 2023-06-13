import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await User.createMany([
      {
        "id":1,
        "nome": "Gustavo",
        "password": "admin",
        "email": "gustavo@example.com",
        "bipassrecover": "3826683hf78",
        "is_admin": true,
        "is_online":false
        },
        {
          "id":2,
          "nome": "Juliana",
          "password": "user1",
          "email": "juliana@example.com",
          "bipassrecover": "74835229fh9484",
          "is_admin": false,
          "is_online":false
          },
          {
            "id":3,
            "nome": "Rodrigo",
            "password": "user2",
            "email": "rodrigo@example.com",
            "bipassrecover": "364887203fh478",
            "is_admin": false,
            "is_online":false
            },
            {
              "id":4,
              "nome": "Camila",
              "password": "user3",
              "email": "camila@example.com",
              "bipassrecover": "232222112lf44",
              "is_admin": false,
              "is_online":false
              },
              {
                "id":5,
                "nome": "Luciana",
                "password": "admin",
                "email": "luciana@example.com",
                "bipassrecover": "00004fs244",
                "is_admin": true,
                "is_online":false
                }
    ])
  }
}
