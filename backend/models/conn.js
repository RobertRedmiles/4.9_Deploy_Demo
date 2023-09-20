const { Sequelize } = require("sequelize");

// DB Connection Configuration
const sequelize = new Sequelize(
    "ecommerce_6uny", 
    "ecommerce_6uny_user", 
    "NpGLJ1tdpV0OZAp9RWhoDYEwf77b7wzF", 
    {
        host: "dpg-ck55aheg2bec73a7lbmg-a",
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
});

// Test connection function
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}

module.exports = {sequelize, testConnection}