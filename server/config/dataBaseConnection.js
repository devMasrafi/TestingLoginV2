const mongoose = require("mongoose");

const dataBaseConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected");
    } catch (error) {
        console.log("database not connected");
    }

}

module.exports = dataBaseConnection;