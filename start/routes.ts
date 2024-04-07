import router from '@adonisjs/core/services/router'
 const CustomersController = () => import('#controllers/customers_controller')
 //import CustomersController from '#controllers/customers_controller'

const UsersController = () => import('#controllers/users_controller')
const ProductsController = () => import('#controllers/products_controller')
const SalesController = () => import('#controllers/sales_controller')


router.group(() => {
  // router.get('/', async () => { return { hello: 'world' } })
  router.resource('users', UsersController).apiOnly()
  router.resource('products', ProductsController).apiOnly();
  router.resource('customers', CustomersController).apiOnly();
  //router.get('customers/:id/sales/:month?/:year?', 'SalesController.show');
  router.resource('sales', SalesController).apiOnly();

  // router.get('customers/:id/sales/:month?/:year?', async ({ params}: HttpContext ) => {
  //   return new CustomersController().show(params)
  // })

})
router.get('/customers/:id/sales/:month?/:year?', [CustomersController, 'show'] )

//import User from '#models/user'
//import router from '@adonisjs/core/services/router'
// import { AuthMiddleware } from './kernel.js'
import { middleware } from './kernel.js';
import LoginController from '#controllers/login_controller'




router.group(() =>{
  router.post('login',[ LoginController, 'store'])
  
  router
    .get('/', async ({ auth }) => {
      return auth.getUserOrFail()
    })
    .use(middleware.auth())
})
