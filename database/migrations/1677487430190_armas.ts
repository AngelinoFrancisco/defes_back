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
      table.boolean('isUsuario'),
      table.boolean('isEfecivo'),
      table.boolean('isSingular'),
      table.boolean('isEmpSeg'),
      table.boolean('isEntExterna'),
      table.boolean('isComMun'), 
      table.integer('usuarioID').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')

      /**
       * Uses dateTimetz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName,(table)=>{ 
      table.dropColumn('usuarioID')
    })
    this.schema.dropTable(this.tableName)
  }
}
