import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'phones'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('phone_number', 13).notNullable().alter()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('phone_number', 10).notNullable().alter()
    })
  }
}