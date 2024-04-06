import type { HttpContext } from '@adonisjs/core/http';
import Product from '#models/product';

export default class ProductsController {

  async index({ }: HttpContext) {
    // const products = await Product.query()
    //   .select('id', 'type', 'name', 'price').orderBy("type", "asc");
    // return products;
    const products= await Product.getListProducts()
    return products
  }

  async store({ request }: HttpContext) {
    const product = await Product.create(request.all());
    return product;
  }


  async show({ params }: HttpContext) {
    const { id } = params;
    const product = await Product.findOrFail(id)
    return product
  }

  async update({ params, request }: HttpContext) {
    const { id } = params;
    const product = await Product.findOrFail(id)
    const updatedProduct = await product.merge(request.all()).save()
    return updatedProduct
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const product = await Product.findOrFail(id)
    await product.delete()
    return response.status(204)

  }
}
