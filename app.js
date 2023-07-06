const express = require("express")
const ConnectDB = require("./Connection")
const userController = require("./user/UserController")

ConnectDB()
const app = express()

app.use(express.json())

app.get("/" , (req,res) => {
     return res.status(200).send({message:"Success"})
})

app.use("/view",express.static("views"))
app.post("/user",userController.creatuser)
app.get("/user",userController.showuser)
app.delete("/user/:id",userController.deleteUser)
app.get("/user/:id",userController.getUserbyId)
app.put("/update/user/:id",userController.updateUser)


app.listen(6200,() => {
    console.log("server mode is ON");
})