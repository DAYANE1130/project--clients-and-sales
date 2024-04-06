import { BaseSchema } from '@adonisjs/lucid/schema'
export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').unsigned().references('id').inTable('customers')
      table.string('street', 255).notNullable()
      table.string('number', 10).notNullable()
      table.string('neighborhood', 255).notNullable()
      table.string('city', 255).notNullable()
      table.string('state', 2).notNullable()
      table.string('postal_code', 8).notNullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
