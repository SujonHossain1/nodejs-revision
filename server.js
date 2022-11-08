const express = require('express');
const fs = require('fs');

// App config
const app = express();

// Middlewares
const middlewares = [express.json(), express.urlencoded({ extended: true })];
app.use(middlewares);

app.get('/download', async (req, res, next) => {
    try {
        // download file

        res.download('./file.txt');
    } catch (error) {
        next(error);
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
