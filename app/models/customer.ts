import Phone from '#models/phone'
import Address from '#models/address'
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import type { HasMany } from '@adonisjs/lucid/types/relations';
import type { CustomerDataUpdate, CustomerData, AddressData, PhoneData } from '../interfaces/Customer/InterfaceCustomer.js'
import Sale from '#models/sale'
import FormatResponseCustomerData from '../utils/formatResponseCustomerData.js';
import CustomerAlredyExistException from '#exceptions/customer_alredy_exist_exception'



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

        const phone = await customer.related('phones').create(phoneData)
        const address = await customer.related('address').create(addressData)

        await trx.commit()

        const responseFormatedCustomer = FormatResponseCustomerData.formatResponseCustomer(customer, address, phone);

        return responseFormatedCustomer

      } catch (error) {
        await trx.rollback()
        throw new CustomerAlredyExistException()
      }
    })
  }

  public static async getListCustomers() {
    return await db
      .from('customers')
      .join('phones', 'customers.id', '=', 'phones.customer_id')
      .select('customers.id', 'customers.name', 'customers.cpf')
      .select('phones.phone_number')
      .orderBy('customers.id', 'asc');

  }
  public static async updateWithTransaction(customerData: CustomerDataUpdate, addressData: AddressData, phoneData: PhoneData) {
    return await db.transaction(async (trx) => {
      try {
        const customer = await Customer.find(customerData.id, { client: trx })
        if (!customer) throw new Error('Customer not found')

        customer.merge(customerData)

        const address = await customer.related('address').query().first()
        if (address) address.merge(addressData)

        const phone = await customer.related('phones').query().first()
        if (phone) phone.merge(phoneData)

        await Promise.all([customer.save(), address?.save(), phone?.save()])

        await trx.commit()

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
