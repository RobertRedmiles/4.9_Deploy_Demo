const { Sequelize } = require("sequelize");

// DB Connection Configuration
const sequelize = new Sequelize(
    "ecommerce_a3y2", 
    "ecommerce_a3y2_user", 
    "u6GzLXGX9gja0QLR0YV9FCkaUSQBT5kh", 
    {
        host: "dpg-ck55ai6ru70s738ff7qg-a",
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