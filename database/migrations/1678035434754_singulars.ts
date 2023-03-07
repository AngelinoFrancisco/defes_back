import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'singulars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome'), 
      table.integer('telefone'),
      table.string('genero'),  
      table.integer('usuarioID').unsigned(),
      table.foreign('usuarioID').references('usuarios').inTable('id')
      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
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
