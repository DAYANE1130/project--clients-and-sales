import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user_validator'
import UserAlreadyExistsException from '#exceptions/user_already_exists_exception'


export default class UsersController {
  protected async store({ request }: HttpContext) {
    const { email, password } = request.all();
    await createUserValidator.validate({ email, password })
    const existingUser = await User.findBy('email', email)
    if (existingUser) {
      throw new UserAlreadyExistsException()
    }
    const user = await User.create({ email, password })
    return user
  }
}



