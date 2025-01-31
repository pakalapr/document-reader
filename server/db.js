const Pool = require("pg").Pool;

/* local database configuration
const pool = new Pool({
  user: "postgres",
  password: "admin123",
  host: "localhost",  
  port: 5432,
  database: "usaf"
});
*/

//Azure postgre sql configuration 

const pool = new Pool({
  user: "dokadmin",
  password: "KrunchSecure123!",
  host: "dokrunchnpsql.postgres.database.azure.com",  
  port: 5432,
  database: "dokrunchn"
});

module.exports = pool;
