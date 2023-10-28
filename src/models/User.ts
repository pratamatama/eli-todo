import { t } from 'elysia'

export default {
  User: t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String(),
    createdAt: t.String(),
    updatedAt: t.String(),
  }),
}
