var chai = require('chai');
var expect = chai.expect;

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe("description", function () {
  this.timeout(0);
  it("chai as promise test", function () {
    expect(true).equal(true);
    return expect(returnPromise()).to.eventually.equal(200);  });
});


function returnPromise(){
  return new Promise(function(success){
    setTimeout(function () {
      success(200);
    }, 5000);
  });
}
