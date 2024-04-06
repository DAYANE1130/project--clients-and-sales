import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sales'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('date_time');
      table.decimal('total_price', 10, 2).nullable().alter();
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dateTime('date_time').notNullable();
      table.decimal('total_price', 10, 2).notNullable().alter();
    })
  }
}