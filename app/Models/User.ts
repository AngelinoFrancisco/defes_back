import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm' 
import Hash from '@ioc:Adonis/Core/Hash' 



export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome:string
  
  @column({serializeAs:null})
  public password:string
  
  @column()
  public email:string
  
  @column()
  public bipassrecover:string
  
  @column()
  public is_admin:boolean
  
  @column()
  public is_online:boolean

  @column.date({ autoCreate: true })
  public createdAt: DateTime

  @column.date({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user:User){
    if(user.$dirty.password){
      user.password = await Hash.make(user.password)
    }
  }
 
  

}
