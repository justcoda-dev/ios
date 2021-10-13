
const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(5000, () => {
    console.log('Static server run in :5000');
});
// port 5000, press terminal 'npm start'