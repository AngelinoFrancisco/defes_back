import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'armas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
      table.string('livrete'),
      table.string('serie'),
      table.string('marca'), 
      table.string('modelo'),
      table.string('tipo'),
      table.boolean('is_usuario'),
      table.boolean('is_efectivo'),
      table.boolean('is_singular'),
      table.boolean('is_empresa_seg'),
      table.boolean('is_ent_externa'),
      table.boolean('is_comando_mun'),  

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
