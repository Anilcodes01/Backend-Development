const express = require('express')
const cors = require('cors')
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!') 
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke!'
        },
        {
            id: 2,
            title: 'Two joke',
            content: 'This is a joke!'
        },
        {
            id: 3,
            title: 'Three joke',
            content: 'This is a joke!'
        },
        {
            id: 4,
            title: 'Four joke',
            content: 'This is a joke!'
        },
        {
            id: 5,
            title: 'Five joke',
            content: 'This is a joke!'
        },
    ]
    res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log('Server is listening on port ' + port)
})
