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
  public isUsuario:boolean

  @column()
  public isEfectivo:boolean
  
  @column()
  public isSingular:boolean
  
  @column()
  public isEmpSeg:boolean

  
  @column()
  public isEntExterna:boolean

  
  @column()
  public isComMun:boolean
  
  @column()
  public usuarioID:number

  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
 