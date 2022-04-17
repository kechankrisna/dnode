import express, { Express, Request, Response, Router } from 'express';
const app = express();
const router: express.Router = express.Router();
const apiV1: express.Router = require('./api_v1')
const apiV2: express.Router = require('./api_v2')

import dotenv from 'dotenv';
dotenv.config();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Docker is easy' })
});

app.get('/auth/profile', (req: Request, res: Response) => {
    res.json({ message: 'Profile from auth request' })
});

app.use('/api/v1/', apiV1)
app.use('/api/v2/', apiV2)

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})