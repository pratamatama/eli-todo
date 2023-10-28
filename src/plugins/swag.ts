import swagger from '@elysiajs/swagger'

export default swagger({
  path: '/api/docs',
  exclude: ['/', '/api/docs', '/api/docs/json'],
  documentation: {
    info: {
      title: 'Elysia Todo Docs',
      version: '0.0.1',
      description: 'This documentation shows the currently available routes',
    },
  },
  swaggerOptions: {
    filter: true,
    withCredentials: true,
    persistAuthorization: true,
    displayRequestDuration: true,
    defaultModelsExpandDepth: 100,
    defaultModelExpandDepth: 100,
  },
})
