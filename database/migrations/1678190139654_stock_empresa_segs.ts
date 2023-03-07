import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_empresa_segs'

 
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.dateTime('data'),
      table.integer('armaID').unsigned().references('id').inTable('armas').onDelete('CASCADE'), 
      table.integer('empSegID').unsigned().references('id').inTable('empresa_segs').onDelete('CASCADE')

      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table)=>{ 
      table.dropColumn('armaID'), 
      table.dropColumn('empSegID')
    })
    this.schema.dropTable(this.tableName)
  }
}
