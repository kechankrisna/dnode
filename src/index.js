const express = require('express');
const app = express();
const router = express.Router();
const apiV1 = require('./api_v1')

app.get('/', (req, res) => {
    res.json({ message: 'Docker is easy' })
});

app.use('/api/v1/', apiV1)

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})