import { Elysia } from 'elysia'
import Auth from '../models/Auth'
import User from '../models/User'
import ServerMessage from '../models/ServerMessage'
import { ServerMessages } from '../utils/enums'

export default (app: Elysia) => {
  app.model(Auth).post(
    '/api/auth/login',
    () => {
      return {
        access: '',
        refresh: '',
        user: {
          id: 1,
          name: 'Someone',
          email: 'someone@email.com',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      }
    },
    {
      body: 'LoginBody',
      response: 'LoginResponse',
      detail: {
        summary: 'Log the user in',
        tags: ['Auth'],
      },
    },
  )

  app.model(Auth).post(
    '/api/auth/regis',
    () => {
      return {
        success: true,
        message: ServerMessages.operationSuccess,
        user: {
          id: 1,
          name: 'Someone',
          email: 'someone@email.com',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      }
    },
    {
      body: 'RegisBody',
      response: 'RegisResponse',
      detail: {
        summary: 'Register new user',
        tags: ['Auth'],
      },
    },
  )

  app
    .model(Auth)
    .model(User)
    .get(
      '/api/auth/user',
      () => {
        return {
          id: 1,
          name: 'Someone',
          email: 'someone@email.com',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      },
      {
        response: 'User',
        detail: {
          summary: 'Get currently logged in user',
          tags: ['Auth'],
        },
      },
    )

  app
    .model(Auth)
    .model(ServerMessage)
    .post(
      '/api/auth/logout',
      () => {
        return {
          success: true,
          message: ServerMessages.operationSuccess,
        }
      },
      {
        response: 'ServerMessage',
        detail: {
          summary: 'Revoke current token and log the user out',
          tags: ['Auth'],
        },
      },
    )

  return app
}
