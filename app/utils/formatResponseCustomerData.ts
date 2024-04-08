
import type { CustomerData, AddressData, PhoneData } from '../interfaces/Customer/InterfaceCustomer.js'

export default class FormatResponseCustomerData {

  public static formatResponseCustomer = (customerData: CustomerData, addressData: AddressData, phoneData: PhoneData) => {
    const dataPhone = { phone: phoneData.phone_number }
    const dataCustomer = { name: customerData.name, cpf: customerData.cpf }
    const dataAddress = {
      street: addressData.street,
      number: addressData.number,
      neighborhood: addressData.neighborhood,
      city: addressData.city,
      state: addressData.city,
      postal_code: addressData.postal_code,
    }

    return { ...dataCustomer, ...dataAddress, ...dataPhone }
  }
}

