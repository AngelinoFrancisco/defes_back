import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmpresaSeg extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome:string

  @column()
  public nif:string

  @column()
  public localizacao:string
 
  @column()
  public usuarioID:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
