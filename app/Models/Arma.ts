import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Arma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public livrete:string
  
  @column()
  public serie:string

  @column()
  public marca:string

  @column()
  public modelo:string

  @column()
  public tipo:string

  @column()
  public is_usuario:boolean

  @column()
  public is_efectivo:boolean
  
  @column()
  public is_singular:boolean
  
  @column()
  public is_empresa_seg:boolean
 
  
  @column()
  public is_ent_externa:boolean

  
  @column()
  public is_comando_mun:boolean
   
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
 