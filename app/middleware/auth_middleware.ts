import type { HttpContext } from '@adonisjs/core/http'
import { NextFn } from '@adonisjs/core/types/http'


export default class AuthMiddleware {
  async handle({ auth }: HttpContext, next: NextFn){
  if (await auth.check()) {
    await next()
  } else {
    throw new Error('Usuário não autenticado')
  }
}
}
