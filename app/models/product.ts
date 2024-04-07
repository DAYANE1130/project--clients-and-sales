import { DateTime } from "luxon";
import { BaseModel, column, hasMany } from "@adonisjs/lucid/orm";
import { compose } from '@adonisjs/core/helpers'
import { SoftDeletes } from 'adonis-lucid-soft-deletes';
import type { HasMany } from '@adonisjs/lucid/types/relations';
import Sale from '#models/sale'

export default class Product extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare price: number;

  @column()
  declare color: string;

  @column()
  declare brand: string;

  @column()
  declare size: string;

  @column()
  declare type: string;

  @hasMany(() => Sale)
  declare sale: HasMany<typeof Sale>

  public static async getListProducts(){
    return  Product.query()
    .select('id', 'type', 'name', 'price').orderBy("type", "asc");
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
