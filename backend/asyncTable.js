const express = require('express');

const app = express();

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'todo'
})


app.listen(3000, () => console.log('server is listening on port 3000'))

app.get('/todos', async (req, res) => {
    const rows = await readTodos()
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(rows))
})


start()

async function start() {
    await connect();
}

async function connect() {
    try
    {
        await client.connect();
    }
    catch(e) {
        console.error(`Failed to connect to ${e}`)
    }
}

async function readTodos() {
    try {
        const results = await client.query('select id, todolist from todos')
        return results.rows;
    }
    catch (e) {
        return [];
    }
}
// execute ()
// async function execute() {
//     try{

//     await client.connect()
//     console.log('Connected successfully!')
//     const results = await client.query('select * from todos')
//     console.table(results.rows)
//     }
//     catch (ex)
//     {
//         console.log(`Something went wrong ${ex}`)
//     }
//     finally
//     {
//         await client.end()
//         console.log('Client disconnected successfully!')
//     }
    
// }