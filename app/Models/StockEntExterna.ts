import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class StockEntExterna extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public arma_id:number
  
  @column()
  public ent_externa_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
