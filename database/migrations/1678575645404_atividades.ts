import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'atividades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('acronimo')
      table.integer('quant').defaultTo(0)

      /**
       * Uses datetz for PostgreSQL and date2 for MSSQL
       */
      table.date('created_at', )
      table.date('updated_at',)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
