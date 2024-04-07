// import { DateTime } from 'luxon'
// import { BaseModel, column } from '@adonisjs/lucid/orm'
// import { compose } from '@adonisjs/core/helpers'
// import hash from '@adonisjs/core/services/hash'
// import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

// const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
//   uids: ['email'],
//   passwordColumnName: 'password',
// })

// export default class User extends compose (BaseModel, AuthFinder) {

//   @column({ isPrimary: true })
//   declare id: number;

//   @column()
//   declare email: string;

//   @column({ serializeAs: null })
//   declare password: string;

  
//   // @beforeSave() // antes da inserção e atualização
//   // static async hashPassword(user: User)  {
//   //   if (user.$dirty.password) {
//   //     user.password = await hash.make(user.password);
//   //   }
//   // }
// //   @beforeSave() // antes da inserção e atualização
// // static async hashPassword(user: User) {
// //   if (user.$dirty.password) {
// //     user.password = await hash.use('scrypt').make(user.password);
// //   }
// // }

//   @column.dateTime({ autoCreate: true })
//   declare createdAt: DateTime;

//   @column.dateTime({ autoCreate: true, autoUpdate: true })
//   declare updatedAt: DateTime;
// }

import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {

  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare email: string;

  @column({ serializeAs: null })
  declare password: string;

  
  // @beforeSave() // antes da inserção e atualização
  // static async hashPassword(user: User)  {
  //   if (user.$dirty.password) {
  //     user.password = await hash.make(user.password);
  //   }
  // }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}


// import { DateTime } from 'luxon'
// import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'
// import hash from '@adonisjs/core/services/hash'

// export default class User extends BaseModel {
//   @column({ isPrimary: true })
//   declare id: number;

//   @column()
//   declare email: string;

//   @column({ serializeAs: null })
//   declare password: string;

//   // @beforeSave() // antes da inserção e atualização
//   // static async hashPassword(user: User) {
//   //   console.log(user)
//   //   if (user.$dirty.password) {
//   //     user.password = await hash.make(user.password);
//   //   }
//   // }

//   @column.dateTime({ autoCreate: true })
//   declare createdAt: DateTime;

//   @column.dateTime({ autoCreate: true, autoUpdate: true })
//   declare updatedAt: DateTime;
// }

