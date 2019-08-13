const request = require('supertest');
const app = require('../public/app');

describe('GET /', () => {
    test('It should response with a homepage', () => {
        return request(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });
});

describe('GET /test', () => {
    test('It should return a test page', () => {
        return request(app)
            .get('/test')
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });
});

describe('GET /fallback', () => {
    test('It should return with a fallback page', () => {
        return request(app)
            .get('/fallback')
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });
});

describe('GET /randomtexts', () => {
    test('It should return a 404 page', () => {
        return request(app)
            .get('/randomtexts')
            .then(response => {
                expect(response.statusCode).toBe(404);
            });
    });
});
