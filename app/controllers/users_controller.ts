import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user_validator'

export default class UsersController {
  protected async store({ request }: HttpContext) {
    const { email, password } = request.all();
    const userData = { email, password };
    await createUserValidator.validate(userData)

    try {
      const user = await User.create(userData)
      return user
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return { message: 'User alredy exist.' }
      }
      throw error
    }
  }

}

