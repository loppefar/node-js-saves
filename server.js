// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world! This is my Node.js application deployed on Render.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
