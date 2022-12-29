// const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log('Headers:\n', request.headers);
//     // console.log('Method:\n', request.method);
//     // console.log('URL:\n', request.url);

//     const user = {
//         name: 'Jhon',
//         age: '30',
//         hobby: 'Programming',
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user))
// });

// server.listen(3000);

const express = require('express');

const app = express();

// Use => "Middleware"
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/:id', (req, res) => {
    // req.query
    // req.body
    // req.headers
    // req.params

    console.log(req.params);
    // res.status(404).send('Not Found');
});

// app.post('/', (req, res) => {
//     const user = req.body;
//     console.log(user);
//     res.send('Success... Added to database');
// });

app.listen(3000);
