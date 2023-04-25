import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'relatorios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('uuid')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('atividade_id').unsigned().references('id').inTable('atividades').onDelete('CASCADE')

      /**
       * Uses datetz for PostgreSQL and date2 for MSSQL
       */
      table.date('created_at', )
      table.date('updated_at', )
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
