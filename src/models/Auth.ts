import { t } from 'elysia'
import User from './User'
import ServerMessage from './ServerMessage'

export default {
  LoginBody: t.Object(
    { email: t.String(), password: t.String() },
    { description: '[email] and [password] is required.' },
  ),
  LoginResponse: t.Object(
    { access: t.String(), refresh: t.String(), user: User.User },
    {
      description:
        '[access] refers to access token. while [refresh] refers to refresh token',
    },
  ),
  RegisBody: t.Object(
    { name: t.String(), email: t.String(), password: t.String() },
    { description: '[name], [email], and [password] is required.' },
  ),
  RegisResponse: t.Object({
    success: t.Boolean(),
    message: t.String(),
    user: User.User,
  }),
}
