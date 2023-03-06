import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class StockEfectivo extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public data:DateTime

  @column()
  public armaID:number
  
  @column()
  public efectivoID:number
 


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
