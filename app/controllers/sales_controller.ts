import type { HttpContext } from '@adonisjs/core/http'
import Sale from '#models/sale'
import Customer from '#models/customer'
import { createSaleValidator } from '#validators/sale_validator'

export default class SalesController {

  async store({ request }: HttpContext) {
    const { customer_id, product_id, quantity, unit_price } = request.all()
    await createSaleValidator.validate(request.all())
    await Customer.findOrFail(customer_id)
    const dataSale = { customer_id, product_id, quantity, unit_price }
    const sale = await Sale.create(dataSale)
    return sale
  }
}
