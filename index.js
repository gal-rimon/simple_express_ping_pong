const express = require('express');
const app = express();
const port = 5001;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`listen to port ${port}`);
});
