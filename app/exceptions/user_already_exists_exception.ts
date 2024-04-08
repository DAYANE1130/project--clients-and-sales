import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserAlreadyExistsException extends Exception {
  handle(ctx: HttpContext) {
    return ctx.response.status(409).send({ message: 'User alredy exist' })
  }
}