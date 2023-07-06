const { default: mongoose, models } = require("mongoose");

class UserModel {
    constructor() {
        this.schema = new mongoose.Schema({

            fullname: { type: String, required: true },
            email: { type: String, require: true, unique: true },
            phone: { type: String, required: true, length: 10 }
        }, {
            timestamps: true
        })
    }
}
const Model = new UserModel()

const userModel = mongoose.model("tbl_user", Model.schema)

module.exports = userModel;