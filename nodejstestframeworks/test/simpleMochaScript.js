//const assert=require("assert")
const chai=require("chai")
const assert=chai.assert
const expect=chai.expect
const add=require("../add")
describe("sample test suite",function(){
    it("sample test case",function(){
        const result=add(10,20)
        assert.equal(30,result)
        assert.typeOf(result,'number')
        expect(result).to.be.a('number');
        expect([1,2,3,4]).to.have.lengthOf(4);
    })
})