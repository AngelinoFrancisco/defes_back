import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_empresa_segs'

 
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
      table.dateTime('data'),
      table.integer('armaID').unsigned(),
      table.foreign('armaID').references('armas').inTable('id'),
      table.integer('empSegID').unsigned(),
      table.foreign('empSegID').references('empresa_segs').inTable('id')

      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table)=>{
      table.dropForeign('armaID'),
      table.dropColumn('armaID'),
      table.dropForeign('empSegID'),
      table.dropColumn('empSegID')
    })
    this.schema.dropTable(this.tableName)
  }
}
