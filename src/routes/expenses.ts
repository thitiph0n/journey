import { Elysia, t } from 'elysia'

export const expensesRoute = new Elysia({ prefix: '/api/expenses' })
  .get('/', () => ({
    expenses: []
  }))
  .post('/', ({ body }) => ({
    success: true,
    expense: body
  }), {
    body: t.Object({
      journeyId: t.String(),
      amount: t.Number(),
      currency: t.String(),
      category: t.String(),
      description: t.Optional(t.String()),
      date: t.String()
    })
  })
  .get('/:id', ({ params }) => ({
    id: params.id,
    amount: 100,
    currency: 'THB',
    category: 'food'
  }))
