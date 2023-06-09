import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('password').notNullable()
      table.string('email').notNullable() 
      table.string('bipassrecover')
      table.boolean('is_admin').defaultTo(false)
      table.boolean('is_online').defaultTo(false)

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
