export interface CustomerDataUpdate {
  id: number
  name: string;
  cpf: string;
}
export interface CustomerData {
  name: string;
  cpf: string;
}

export interface AddressData {
  customerId?: number;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
}

export interface PhoneData {
  customerId?: number;
  phone_number: string;
}