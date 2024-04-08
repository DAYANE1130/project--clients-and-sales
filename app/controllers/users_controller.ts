import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { createUserValidator } from '#validators/user_validator'

export default class UsersController {
  protected async store({ request }: HttpContext) {
    const { email, password } = request.all();
    const userData = { email, password };
    await createUserValidator.validate(userData)
    // const find = User.verifyCredentials(userData.email, userData.password);
    const user = await User.create(userData);
    return user
    // if (!find) return user;
    // else return "JA exiwte";
    // cara acho que ele nunca vai deixar criar , usando credenciais
    // se não encontrar no banco vai dar pau caso email esteja errado
    // errado é  mesma coisa que mandar um que não existe

    // const user = await User.create(userData);
    // if (!user) return response.status(404)

    // return user;
  }
}
