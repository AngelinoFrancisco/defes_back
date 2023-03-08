import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Efectivo from 'App/Models/Efectivo'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method


await Efectivo.createMany([
  {
    "id": 1,
    "nome": "João Silva",
    "nip": "123456789",
    "patente": "912345678",
    "genero": "Masculino",
    "usuario_id": 3
  },
  {
    "id": 2,
    "nome": "Ana Santos",
    "nip": "987654321",
    "patente": "921234567",
    "genero": "Feminino",
    "usuario_id": 3
  },
  {
    "id": 3,
    "nome": "Mário Costa",
    "nip": "24681012",
    "patente": "911234567",
    "genero": "Masculino",
    "usuario_id": 3
  },
  {
    "id": 4,
    "nome": "Sofia Ferreira",
    "nip": "12162024",
    "patente": "931234567",
    "genero": "Feminino",
    "usuario_id": 3
  }, {
    "id": 5,
    "nome":"Ricardo Carvalho",
    "nip": "222333444",
    "patente": "961234567",
    "genero": "Masculino",
    "usuario_id": 3
  }])


  }
}
