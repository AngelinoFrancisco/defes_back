import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_ent_externas'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
      table.dateTime('data'),
      table.integer('armaID').unsigned(),
      table.foreign('armaID').references('armas').inTable('id'),
      table.integer('entExternaID').unsigned(),
      table.foreign('entExternaID').references('ent_externas').inTable('id')

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
      table.dropForeign('entExternaID'),
      table.dropColumn('entExternaID')
    })
    this.schema.dropTable(this.tableName)
  }
}
