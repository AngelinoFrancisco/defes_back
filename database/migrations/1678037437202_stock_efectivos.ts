import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_efectivos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
      table.dateTime('data'),
      table.integer('armaID').unsigned(),
      table.foreign('armaID').references('armas').inTable('id'),
      table.integer('efectivoID').unsigned(),
      table.foreign('efectivoID').references('efectivos').inTable('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table)=>{
      table.dropForeign('armaID'),
      table.dropColumn('armaID'),
      table.dropForeign('efectivoID'),
      table.dropColumn('efectivoID')
    })
    this.schema.dropTable(this.tableName)
  }
}
