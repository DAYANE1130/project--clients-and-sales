
import Customer from '#models/customer'
import Sale from '#models/sale'
import type { HttpContext } from '@adonisjs/core/http'
import { createCustomerValidator, updateCustomerValidator } from '#validators/customer_validator'
import CustomerAlredyExistException from '#exceptions/customer_alredy_exist_exception'

export default class CustomersController {

  async index({ }: HttpContext) {
    const customers = await Customer.getListCustomers()
    return customers
  }

  public async store({ request }: HttpContext) {
    const { name, cpf, street, number, neighborhood, city, state, postal_code, phone_number } = request.all();
    await createCustomerValidator.validate(request.all())
    const customerData = { name, cpf }
    const addressData = { street, number, neighborhood, city, state, postal_code }
    const phoneData = { phone_number }
    const customer = await Customer.createWithTransaction(customerData, addressData, phoneData)
    return customer
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
    await updateCustomerValidator.validate(request.all())

    const existingCustomer = await Customer.findBy('cpf', cpf)
    if (existingCustomer && existingCustomer.id !== id) {
      throw new CustomerAlredyExistException()
    }
    const customerData = { id, name, cpf }
    const addressData = { street, number, neighborhood, city, state, postal_code }
    const phoneData = { phone_number }

    await Customer.updateWithTransaction(customerData, addressData, phoneData)
    return response.status(200).json({ message: 'Customer successfully updated' })
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const customer = await Customer.findOrFail(id)
    await customer.delete()
    return response.status(200).json({ message: "Customer deleted successfully" })
  }
}