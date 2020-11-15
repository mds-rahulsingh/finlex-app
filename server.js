const express = require('express');

const app = express();

app.use(express.static('./dist/finlex-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/finlex-app/'}),
);

app.listen(process.env.PORT || 8080);