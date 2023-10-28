import Elysia from 'elysia'
import FetchQuery from '../models/FetchQuery'
import { Describe } from '../utils/describer'

export default (app: Elysia) => {
  app.model(FetchQuery).get('/api/todos', () => 'GET - /api/todos', {
    query: 'FetchQuery',
    detail: {
      tags: ['Todos'],
      summary: Describe.listing,
      description: Describe.filterable,
    },
  })

  app.post('/api/todos', () => 'POST - /api/todos', {
    detail: {
      tags: ['Todos'],
      summary: Describe.storing,
    },
  })

  app.get('/api/todos/:id', ({ params: { id } }) => `GET - /api/todos/${id}`, {
    detail: {
      tags: ['Todos'],
      summary: Describe.displaySpecific,
    },
  })

  app.patch(
    '/api/todos/:id',
    ({ params: { id } }) => `PATCH - /api/todos/${id}`,
    {
      detail: {
        tags: ['Todos'],
        summary: Describe.updateSpecific,
      },
    },
  )

  app.delete(
    '/api/todos/:id',
    ({ params: { id } }) => `DELETE - /api/todos/${id}`,
    {
      detail: {
        tags: ['Todos'],
        summary: Describe.deleteSpecific,
      },
    },
  )

  return app
}
