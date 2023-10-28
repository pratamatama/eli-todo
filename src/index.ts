import { Elysia } from 'elysia'
import swag from './plugins/swag'
import TodoController from './controllers/TodoController'
import AuthController from './controllers/AuthController'

const app = new Elysia()
  .use(swag)
  .get('/', () => 'Server Up!')
  .use(AuthController)
  .use(TodoController)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
