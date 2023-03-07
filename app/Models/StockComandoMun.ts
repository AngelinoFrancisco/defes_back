import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class StockComandoMun extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public data:DateTime

  @column()
  public arma_id:number
  
  @column()
  public com_mun_id:number
 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
