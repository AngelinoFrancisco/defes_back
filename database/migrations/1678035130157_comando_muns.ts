import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comando_muns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome'),
      table.string('municipio'),
      table.integer('usuarioID').unsigned(),
      table.foreign('usuarioID').references('usuarios').inTable('id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table)=>{
      table.dropForeign('usuarioID'),
      table.dropColumn('usuarioID')
    })
    this.schema.dropTable(this.tableName)
  }
}
