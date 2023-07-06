const { default: mongoose, models } = require("mongoose");

const ConnectDB = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/crudtask")
        console.log("DB Connected");   
    } catch (error) {
        console.log("DB Connection Loss");
    }
}
module.exports = ConnectDB