import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class LoginController {

  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth }: HttpContext) {
    const { email, password } = request.all()
    const user = await User.verifyCredentials(email, password)
    const token = await auth.use('jwt').generate(user)
    return token


  }

  /**
   * Show individual record
   */

}