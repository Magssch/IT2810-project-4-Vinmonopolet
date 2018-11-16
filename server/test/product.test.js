let chai = require('chai');
let chaiHttp = require('chai-http');


let server = require('../server');
let product = require('../models/product.model')

console.log(process.env.NODE_ENV);


chai.use(chaiHttp);
let should = chai.should();

describe('Products', () => {
   /*
   beforeEach((done) => { //Empty the database before every test
      product.remove({}, (err) => {
         done();
      });
   });
   */

   describe('/GET product', () => {
      it('it should GET all the books', (done)=> {
         chai.request(server)
         .get('/product')
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
         done();
         });
      });;
   });
});
