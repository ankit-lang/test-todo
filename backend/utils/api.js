import express from "express"


const apiRouter = express.Router()



apiRouter.post("login", (req,res)=>{
    res.send("login")
})

export default apiRouter