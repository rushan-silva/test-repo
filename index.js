import express from 'express';
import routes from './src/routes';

const app = express();

const PORT = process.env.port || 3000;

app.use('/', routes);

app.listen(PORT, err => {
    if (err) {
        return console.log('ERROR: ', err);
    }

    console.log('App running on port 9000');
});