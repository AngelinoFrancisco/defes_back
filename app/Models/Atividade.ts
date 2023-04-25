import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Atividade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string
  
  @column()
  public acronimo:string
  
  @column()
  public quant:number

  @column.date({ autoCreate: true })
  public createdAt: DateTime

  @column.date({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
