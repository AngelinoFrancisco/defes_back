import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_efectivos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.dateTime('data'),
      table.integer('armaID').unsigned(),
      table.integer('armaID').references('armas').inTable('id'),
      table.integer('efectivoID').unsigned(),
      table.integer('efectivoID').references('efectivos').inTable('id')

      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table)=>{
      table.dropinteger('armaID'),
      table.dropColumn('armaID'),
      table.dropinteger('efectivoID'),
      table.dropColumn('efectivoID')
    })
    this.schema.dropTable(this.tableName)
  }
}
