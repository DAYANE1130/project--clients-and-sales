import vine from '@vinejs/vine'

export const createCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(2).nullable(),
    cpf: vine.string().fixedLength(11).nullable(),
    street: vine.string().minLength(1).nullable(),
    number: vine.string().minLength(1).nullable(),
    neighborhood: vine.string().minLength(1).nullable(),
    city: vine.string().minLength(1).nullable(),
    state: vine.string().toUpperCase().minLength(2).nullable(),
    postal_code: vine.string().fixedLength(8).nullable(),
    phone_number: vine.string().mobile().nullable()
  })
)

export const updateCustomerValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(2).optional(),
    cpf: vine.string().fixedLength(11).optional(),
    street: vine.string().minLength(1).optional(),
    number: vine.string().minLength(1).optional(),
    neighborhood: vine.string().minLength(1).optional(),
    city: vine.string().minLength(1).optional(),
    state: vine.string().toUpperCase().minLength(2).optional(),
    postal_code: vine.string().fixedLength(8).optional(),
    phone_number: vine.string().mobile().optional()
  })
)