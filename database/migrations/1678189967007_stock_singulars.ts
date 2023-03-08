import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stock_singulars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(), 
      table.integer('arma_id').unsigned().references('id').inTable('armas').onDelete('CASCADE'), 
      table.integer('singular_id').unsigned().references('id').inTable('singulars').onDelete('CASCADE')

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
