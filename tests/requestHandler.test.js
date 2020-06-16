const requestPost = require('../src/server/handleRequest');
const handlePostRequest = requestPost.handlePostRequest;
const httpMocks = require('node-mocks-http');

describe('Test, the function "handlePostRequest()" should exist', () => {
    test('It should return true', async() => {
        expect(handlePostRequest).toBeDefined();
    });
});

describe('Test "handlePostRequest()" should be a function', () => {
    test('It should be a function', async() => {
        expect(typeof handlePostRequest).toBe("function");
    });
});

describe('Test, the function "handlePostRequest()" returns 200 if a valid url is being provided', () => {
    test('handlePostRequest should send a 200 error if user inputs correctly', () => {
        const req = httpMocks.createRequest({
            body: {
                url: "https://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/"
            }
        });
        const res = httpMocks.createResponse();
        handlePostRequest(req, res)
            // validate HTTP result
        expect(res.statusCode).toBe(200);
    });
});