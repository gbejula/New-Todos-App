const { Pool } = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'password'
})

module.exports = pool;