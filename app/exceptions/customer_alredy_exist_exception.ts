import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class CustomerAlredyExistException extends Exception {
  handle(ctx: HttpContext) {
    return ctx.response.status(409).send({ message: 'Customer alredy exist' })
  }
  
}