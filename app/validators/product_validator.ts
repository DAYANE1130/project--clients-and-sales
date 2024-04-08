import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(1).nullable(),
    price: vine.number({ strict: true }).positive().decimal([0,2]).nullable(),
    color: vine.string().minLength(1).nullable(),
    brand: vine.string().minLength(1).nullable(),
    size: vine.number({ strict: true }).positive().withoutDecimals().nullable(),
    type: vine.string().minLength(1).nullable(),
  })
)

export const updateProductValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(1).optional(),
    price: vine.number({ strict: true }).positive().decimal([0, 2]).optional(),
    color: vine.string().minLength(1).optional(),
    brand: vine.string().minLength(1).optional(),
    size: vine.number({ strict: true }).positive().withoutDecimals().optional(),
    type: vine.string().minLength(1).optional(),
  })
)