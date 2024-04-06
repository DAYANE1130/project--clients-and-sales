import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, beforeSave } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Customer from '#models/customer'
import Product from '#models/product';

export default class Sale extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare customerId: number

  @column()
  declare productId: number

  @column()
  declare quantity: number

  @column()
  declare unitPrice: number

  @column()
  declare totalPrice: number

  @beforeSave()
  public static calculateTotalPrice(sale: Sale) {
    return sale.totalPrice = sale.quantity * sale.unitPrice;
  }



  public static async getSalesByCustomerId(customerId: number, month: number, year: number) {

    let query = Sale.query()
      .join('customers', 'sales.customer_id', '=', 'customers.id')
      .where('sales.customer_id', customerId)
      .select('sales.*');

    if (month && year) {
      query = query.whereRaw('MONTH(sales.created_at) = ? AND YEAR(sales.created_at) = ?', [month, year]);
    }

    return await query.orderBy('sales.created_at', 'desc');
  }

  @belongsTo(() => Customer)
  declare customer: BelongsTo<typeof Customer>

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
