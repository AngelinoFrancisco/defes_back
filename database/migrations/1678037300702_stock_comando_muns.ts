import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_comando_muns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.dateTime('data'), 
      table.integer('armaID').references('armas').inTable('id'), 
      table.integer('comMunID').references('comando_muns').inTable('id')

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
      table.dropinteger('comMunID'),
      table.dropColumn('comMunID')
    })
    this.schema.dropTable(this.tableName)
  }
}
