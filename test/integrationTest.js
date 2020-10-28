require('should');
const request = require('supertest');
const controller = require("../controllers/controller");
const app = require('../app.js');

describe('integration test - promise', function () {

    // it("get('/') test", function () {
    //     return request(app)
    //         .get('/besker')
    //         .expect(200)
    //         .expect('Content-Type', /html/);
    // });

    it("get('/beskeder') test", async () => {
        let response = await request(app)
            .get('/beskeder')
            .expect(200)
            .expect('Content-Type', /json/);
        response.body.length.should.be.greaterThanOrEqual(2);
        response.body[1].navn.should.be.equal('Ida');
        response.body[1].rum.should.be.equal('xxx');
    });

    // it("get('/beskeder') test", async () => {
    //     let response = await request(app)
    //         .get('/beskeder')
    //         .expect(200)
    //         .expect('Content-Type', /json/);
    //     response.body.length.should.be.greaterThanOrEqual(1);
    //     response.body[0].rum.should.be.equal('xxx');
    // });

    it("post('/beskeder') test", async () => {
        let response = await request(app)
            .post('/beskeder')
            .send({
                'navn': 'Bo',
                'rum': 'HHH',
                'tekst': 'Hej'
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200);
        response.body.message.should.be.equal('Besked gemt!');
        response = await controller.getRum;
        response.length.should.be.greaterThanOrEqual(0);
        //response[2].rum.should.be.equal('HHH');
    });
});