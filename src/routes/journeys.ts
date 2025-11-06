import { Elysia, t } from 'elysia'

export const journeysRoute = new Elysia({ prefix: '/api/journeys' })
  .get('/', () => ({
    journeys: []
  }))
  .post('/', ({ body }) => ({
    success: true,
    journey: body
  }), {
    body: t.Object({
      title: t.String(),
      description: t.Optional(t.String()),
      startDate: t.String(),
      endDate: t.Optional(t.String())
    })
  })
  .get('/:id', ({ params }) => ({
    id: params.id,
    title: 'Sample Journey',
    description: 'A sample journey'
  }))
