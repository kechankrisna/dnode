"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
const apiV1 = require('./api_v1');
const apiV2 = require('./api_v2');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.get('/', (req, res) => {
    res.json({ message: 'Docker is easy' });
});
app.get('/auth/profile', (req, res) => {
    res.json({ message: 'Profile from auth request' });
});
app.use('/api/v1/', apiV1);
app.use('/api/v2/', apiV2);
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
