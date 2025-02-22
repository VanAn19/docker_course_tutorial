const mongoose = require("mongoose");

function connect() {
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((err) => {
            console.log("database connection failed. exiting now...");
            console.error(err.message);
            process.exit(1);
        });
}

module.exports = connect;