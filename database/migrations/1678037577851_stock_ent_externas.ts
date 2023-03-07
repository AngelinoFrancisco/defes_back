import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_ent_externas'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.dateTime('data'),
      table.integer('armaID').unsigned(),
      table.integer('armaID').references('armas').inTable('id'),
      table.integer('entExternaID').unsigned(),
      table.integer('entExternaID').references('ent_externas').inTable('id')

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
      table.dropinteger('entExternaID'),
      table.dropColumn('entExternaID')
    })
    this.schema.dropTable(this.tableName)
  }
}
