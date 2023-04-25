import { DateTime, SecondNumbers } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Atividade from './Atividade'

export default class Relatorio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string
 
  @column()
  public uuid:string

  @column()
  public user_id:number

  @column()
  public atividade_id:number

  @hasMany(()=>User)
  public users:HasMany<typeof User>

  @hasMany(()=>Atividade)
  public atividades:HasMany<typeof Atividade>

  @column.date({ autoCreate: true })
  public createdAt: DateTime

  @column.date({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
