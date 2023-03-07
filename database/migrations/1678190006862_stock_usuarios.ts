import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.dateTime('data'),
      table.integer('arma_id').unsigned().references('id').inTable('armas').onDelete('CASCADE'), 
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')

      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () { 
    this.schema.dropTable(this.tableName)
  }
}
