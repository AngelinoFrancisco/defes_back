import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Frequencia extends BaseModel {
  @column({ isPrimary: true })
  public id: number 

  @column()
  public user_id:number

  @column.date({ autoCreate: true })
  public createdAt: DateTime

  @column.date({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>User)
  public users:HasMany<typeof User>
}