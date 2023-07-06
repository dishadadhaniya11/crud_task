const userModel = require("./UserModel");

class UserController{

    async creatuser(req,res){

        try {
            const result = await userModel.create(req.body)
            if(result) return res.status(200).send({message:"Success",user:result})
            return res.status(400).send({message:"Something went wrong"})
        } catch (error) {
           if(error && error.code === 11000){
            return res.status(400).send({message:"Email is already Exist"})
           }
            return res.status(500).send({message:"Internal server error"})
        }
    }

    async showuser(req,res){
       try {
        const users = await userModel.find({})
        if(users) return res.status(200).send({message:"Success",users})
        return res.status(500).send({message:"Something went wrong"})
       } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Internal server error"})
       }
    }

    async deleteUser(req,res) {
        try {
            const result = await userModel.deleteOne({_id:req.params.id})
            if(result) return res.status(200).send({message:"Success"})

            return res.status(400).send({message:"Someting went wrong"})
        } catch (error) {
            return res.status(500).send({message:"Internal server error"})
        }
    }

    async getUserbyId(req,res){
        
        try {
            const {id} = req.params
            const result = await userModel.findById(id)
            if(result) return res.status(200).send({message:"Success",user:result})

            return res.status(500).send({message:"Someting went wrong"})
        } catch (error) {
            return res.status(500).send({message:"Internal server error"})
            
        }
    }

    async updateUser(req,res){
      try {
        const id = req.params.id
       
        const body = req.body
        const result = await userModel.updateOne({_id:id},body)
       
        if(result.modifiedCount > 0 || result.matchedCount > 0){
            return res.status(200).send({message:"Success"})
        }
        return res.status(400).send({message:"Somthing Went Wrong"})

      } catch (error) {
        return res.status(400).send({message:"Internal server error"})

      }
    }

}

const userController = new UserController()
module.exports = userController
