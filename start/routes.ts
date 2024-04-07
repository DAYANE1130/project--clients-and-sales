import router from '@adonisjs/core/services/router'
const CustomersController = () => import('#controllers/customers_controller')
const UsersController = () => import('#controllers/users_controller')
const ProductsController = () => import('#controllers/products_controller')
const SalesController = () => import('#controllers/sales_controller')
import { middleware } from './kernel.js';
const LoginController = () => import('#controllers/login_controller')


router.resource('users', UsersController).apiOnly()
router.post('login', [LoginController, 'store'])

router.group(() => {
  router.resource('products', ProductsController).apiOnly();
  router.resource('customers', CustomersController).apiOnly();
  router.resource('sales', SalesController).apiOnly();
}).use(middleware.auth())

router.get('/customers/:id/sales/:month?/:year?', [CustomersController, 'show']).use(middleware.auth())

