
import Customer from '#models/customer'
import Sale from '#models/sale'
import type { HttpContext } from '@adonisjs/core/http'


export default class CustomersController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) {
    const customers = await Customer.getListCustomers()
    return customers
  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  public async store({ request, response }: HttpContext) {
    const { name, cpf, street, number, neighborhood, city, state, postal_code, phone_number } = request.all();

    try {
      const customerData = { name, cpf }
      const addressData = { street, number, neighborhood, city, state, postal_code }
      const phoneData = { phone_number }

      await Customer.createWithTransaction(customerData, addressData, phoneData)

      return response.status(201).json({ message: 'Customer successfully created' })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }

  }

  async show({ params }: HttpContext) {
    const { id, month, year } = params;
    await Customer.findOrFail(id)
    const salesOfCustomer = await Sale.getSalesByCustomerId(id, month, year)
    return salesOfCustomer
  }

  async update({ params, request, response }: HttpContext) {
    const { id } = params;
    const { name, cpf, street, number, neighborhood, city, state, postal_code, phone_number } = request.all();
    const customerData = { id, name, cpf }
    const addressData = { street, number, neighborhood, city, state, postal_code }
    const phoneData = { phone_number }
    const customer = await Customer.updateWithTransaction(customerData, addressData, phoneData)
    if (!customer) return null
    return response.status(200).json({ message: 'Customer successfully updated' })
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const customer = await Customer.findOrFail(id)
    // o EERO ESTA INDO pro eero geral
    if(!customer) return response.status(400).json({message: 'Customer not found'})
    await customer.delete()
    return response.status(204)

  }


}