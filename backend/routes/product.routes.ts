import { Router } from 'express';

const router = Router();

export const sendMessage = (req, res) => {
    res.send('Message sent successfully');
};

router.post('/', sendMessage);

export default router;
