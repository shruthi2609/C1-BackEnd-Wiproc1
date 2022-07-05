const sinon=require("sinon")
const Controllers=require("../controllers/ContactController")
const Contact=require("../models/ContactModel")
describe('setup controller',function(){
    let req={
        body:{
            "fname":"carry",
            "email":"carry@gmail.com",
            "phone":293829382
        },
        params:{
            id:"62bee749509fc78c53e3883c",
        }
    },
    error=new Error("unexcepted error occured"),
    res={},
    expectedResult;

    describe("create controllers test",function()
    {
        beforeEach(function () {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        })
        it('should return create obj after create controllers',function(){
                expectedResult=req.body
                sinon.stub(Contact,'create').yields(null,expectedResult)
                Controllers.createUser(req,res)
               sinon.assert.calledWith(Contact.create,req.body);
                sinon.assert.calledWith(res.json,sinon.match({fname:req.body.fname}))
                sinon.assert.calledWith(res.json,sinon.match({email:req.body.email}))
                sinon.assert.calledWith(res.json,sinon.match({phone:req.body.phone}))
        });
    });
});