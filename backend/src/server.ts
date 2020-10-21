import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuarios');

    response.json([
        'teste1',
        'teste23',
        'teste45'
    ])
});

app.listen(3333);