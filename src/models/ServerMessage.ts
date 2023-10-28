import { t } from 'elysia'

export default {
  ServerMessage: t.Object(
    { success: t.Boolean(), message: t.String() },
    { detail: 'a [status] and a [message] returned by the server.' },
  ),
}
