const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database: "test1",
    password: "12345",
    port: 5432
});
module.exports = pool;