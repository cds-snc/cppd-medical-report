const request = require('supertest')
const app = require('../../app.js')

const mockFn = jest
  .fn(req => {
    return { social: '555 555 555' }
  })
  .mockImplementationOnce(req => {
    return {}
  })

jest.mock('../../utils/session.helpers', () => {
  const original = jest.requireActual('../../utils/session.helpers')
  return {
    ...original,
    getSessionData: jest.fn(req => {
      const result = mockFn()
      return result
    }),
  }
})

test('Confirmation receives 200 when data exists', async () => {
  const route = app.routes.get('confirmation')
  const response = await request(app).get(route.path.en)
  expect(response.statusCode).toBe(200)
})
