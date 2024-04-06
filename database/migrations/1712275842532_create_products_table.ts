import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.string('color', 50)
      table.string('brand', 50)
      table.string('size', 10)
      table.string('type', 50)
      table.timestamp('deleted_at').nullable()
      table.timestamps(true)
    
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}