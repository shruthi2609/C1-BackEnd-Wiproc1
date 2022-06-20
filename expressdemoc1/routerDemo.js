const express=require("express")
const server=express()
const getRoutes=require("./api/getRoutes")
const postRoutes=require("./api/postRoutes")
server.use("/user",getRoutes)
server.use("/routePost",postRoutes)

server.listen(3001,()=>console.log("started"))