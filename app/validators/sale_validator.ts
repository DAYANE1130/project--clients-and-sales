import vine from '@vinejs/vine'

export const createSaleValidator = vine.compile(
  vine.object({
    customer_id: vine.number({ strict: true }).withoutDecimals().positive().nullable(),
    product_id: vine.number({ strict: true }).withoutDecimals().positive().nullable(),
    quantity: vine.number({ strict: true }).withoutDecimals().positive().nullable(),
    unit_price: vine.number({ strict: true }).positive().decimal([0,2]).nullable()
  })
)
