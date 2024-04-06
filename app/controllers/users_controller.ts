import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  protected async store({ request }: HttpContext) {
    const user = await User.create(request.all());
    return user;
  }
}
