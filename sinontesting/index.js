const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const ContactManager=require("./routes/ContactManagerRoutes")
const swaggerJsdoc=require("swagger-jsdoc")
const swaggerUi=require("swagger-ui-express")
const cors=require("cors")
const authentication=require("./routes/AuthenticationRoutes")
app.use(bodyParser.json()
)
const protectedRoutes=require("./routes/ProtectedRoutes")
//swagger options
const options = {
    definition: {
    openapi: "3.0.0",
    info: {
    title: " Express API with Swagger",
    version: "0.1.0",
    description:
    "This is a simple CRUD API application made with Express and documented with Swagger",
    license: {
    name: "MIT",
    url: "https://spdx.org/licenses/MIT.html",
    },
    },
    servers: [
    {
    url: "http://localhost:3001",
    },
    ],
    },
    apis: ["./routes/ContactManagerRoutes.js"],
    }; 
const specs=swaggerJsdoc(options)
app.use("/api-docs",
swaggerUi.serve,
swaggerUi.setup(specs,{explorer:true}))
app.use(cors())
app.use("/",authentication)
app.use("/",ContactManager)
app.use("/",protectedRoutes)

mongoose.connect("mongodb://localhost:27017/c1sinon").then((res)=>console.log("connecting")).catch((err)=>console.log(err))

app.listen(3001,()=>console.log("server started"))