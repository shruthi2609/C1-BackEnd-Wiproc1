const expect=require("chai").expect
const validateRange=require("../validator")
describe("validate the num is valid",function(){
    it("it should return false if we are passing 9",function(){
        expect(validateRange(9)).to.be.false
    })
    it("it should return false if we are passing 15",function(){
        expect(validateRange(15)).to.be.true
    })
    it("it should return false if we are passing 35",function(){
        expect(validateRange(35)).to.be.false
    })
})