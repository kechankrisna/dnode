import express,  { Express, Request, Response, Router } from 'express';
const router : Router = express.Router();

router.get('/profile', (req: Request, res: Response) => {
    res.json({ message: 'current profile v1' });
});

module.exports = router;