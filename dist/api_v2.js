"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/profile', (req, res) => {
    res.json({ message: 'current profile v2' });
});
router.get('/hotfix', (req, res) => {
    res.json({ message: 'current hotfix v2' });
});
module.exports = router;
