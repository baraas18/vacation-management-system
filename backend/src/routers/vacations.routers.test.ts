import server from '../app'
import request from 'supertest'
import { pool } from '../db/mysql'

describe('test vacations router', () => {
    beforeAll(() => {
        // load some data to the database
    })
    afterAll(() => {
        // delete the data from the database
        pool.end();
    })
    describe('test /api/vacations endpoint', () => {
        test('it should return an array of vacations', async () => {
            const result = await request(server).get('/api/vacations')
            expect(result.statusCode).toBe(200);
            expect(Array.isArray(result.body)).toBeTruthy()
            expect(result.body[0]).toHaveProperty('id')
            expect(result.body[0]).toHaveProperty('name')
            expect(result.body[0]).toHaveProperty('price')
            expect(result.body[0]).toHaveProperty('stock')
            expect(result.body[0]).toHaveProperty('imageUrl')
        })

    })
})
