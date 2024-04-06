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

  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
