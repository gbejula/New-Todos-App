const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./util/database');

const doRoute = require('./routes/admin');

const app = express();

pool.connect()
.then(() => {
    console.log('connected.')
})
.catch(err => {
    console.log(err);
})

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, UPDATE')
    next();
})

// app.get('/api/todos', (req, res, next) => {
    
// })

app.use('/', doRoute)




app.listen(3000);



// db.query('SELECT * from todos')
//     .then(() => console.log('Connected successfully!'))
//     .then(() => db.query('select * from todos'))
//     .then(results => console.table(results.rows))
//     .catch(e => console.error(e))
//     .finally(() => db.end());


// const adminRoutes = require('./routes/admin')
// const mainRoutes = require('./routes/main')
 
// app.use(adminRoutes)
// app.use(mainRoutes)

