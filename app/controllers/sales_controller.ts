import type { HttpContext } from '@adonisjs/core/http'
import Sale from '#models/sale'
import Customer from '#models/customer'

export default class SalesController {

  async store({ request, response }: HttpContext) {
    const { customer_id, product_id, quantity, unit_price } = request.all()

    const customer = await Customer.findOrFail(customer_id)

    if (!customer) return response.status(400).json({ message: 'Customer not found' })
    // funciona mas aparece erro 404
    const dataSale = { customer_id, product_id, quantity, unit_price }
    // mesmo com o try/catch retornava status 200 quando não existe cliente
    // dá 200 mas não cria nada no banco
    // só com esse if que retorna agora o 404 pro user
    try {
      const sale = await Sale.create(dataSale)
      return sale
    } catch (error) {
      console.log(error)
    }

  }
}
