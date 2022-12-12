
require("dotenv").config();
module.exports = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    database: "buildingInfo",
    user: "root",
    password: "rootroot",
    charset: "utf8",
  },
};
