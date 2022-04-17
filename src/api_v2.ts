import express, { Express, Request, Response, Router } from 'express';
const router : express.Router = express.Router();

router.get('/profile', (req: Request, res :Response) => {
    res.json({ message: 'current profile v2' });
});

router.get('/hotfix', (req: Request, res :Response) => {
    res.json({ message: 'current hotfix v2' });
});

module.exports = router;