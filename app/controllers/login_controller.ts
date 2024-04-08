import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user_validator'

export default class LoginController {

  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth }: HttpContext) {
    const { email, password } = request.all()
    await createUserValidator.validate(request.all())
    const user = await User.verifyCredentials(email, password)
    const token = await auth.use('jwt').generate(user)
    return token


  }

  /**
   * Show individual record
   */

}