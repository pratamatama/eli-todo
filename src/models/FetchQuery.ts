import { t } from 'elysia'

export default {
  FetchQuery: t.Optional(
    t.Object(
      {
        search: t.Optional(t.String()),
        paginate: t.Optional(t.Number()),
        sortBy: t.Optional(t.String()),
        sortOrder: t.Optional(t.String()),
      },
      {
        description:
          'Available keys to include in Query Parameters (when indexing)',
      },
    ),
  ),
}
