import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
 
      table.dropForeign(['customer_id']) 
      table.foreign('customer_id').references('customers.id').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['customer_id']) 
      table.foreign('customer_id').references('customers.id')
    })
  }
}