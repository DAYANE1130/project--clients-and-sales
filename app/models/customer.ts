import Phone from '#models/phone'
import Address from '#models/address'
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import type { HasMany } from '@adonisjs/lucid/types/relations';
import type { CustomerDataUpdate, CustomerData, AddressData, PhoneData } from '../interfaces/Customer/InterfaceCustomer.ts'
import Sale from '#models/sale'



export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare cpf: string

  @hasMany(() => Phone)
  declare phones: HasMany<typeof Phone>

  @hasMany(() => Address)
  declare address: HasMany<typeof Address>

  @hasMany(() => Sale)
  declare sale: HasMany<typeof Sale>

  public static async createWithTransaction(customerData: CustomerData, addressData: AddressData, phoneData: PhoneData) {
    return await db.transaction(async (trx) => {
      try {
        const customer = await Customer.create(customerData, { client: trx })

        if (!addressData.customerId) addressData.customerId = customer.id
        if (!phoneData.customerId) phoneData.customerId = customer.id

        await customer.related('phones').create(phoneData)
        await customer.related('address').create(addressData)

        return customer
      } catch (error) {
        await trx.rollback()
        throw error
      }
    })
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
