import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'singulars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.string('nome'), 
      table.integer('telefone'),
      table.string('genero'),   
      table.integer('usuarioID').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')
      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    }) 
  }

  public async down () {
    this.schema.table(this.tableName, (table)=>{ 
      table.dropColumn('usuarioID')
    })
    this.schema.dropTable(this.tableName)
  }
}
