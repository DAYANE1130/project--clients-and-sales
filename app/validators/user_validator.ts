import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().nullable(),
    password: vine.string().trim().alphaNumeric({
      allowSpaces: false,
      allowUnderscores: true,
      allowDashes: true,
    }).minLength(6).nullable(),
  })
)
