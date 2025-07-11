import express from 'express';
import cors from 'cors';
import { Router } from 'express';

const app = express();
const router = Router();
const contactRouter = Router();

app.use(cors());
app.use(express.json());

// Example product route
router.get('/', (req, res) => {
    res.send('Product route');
});

// Define your contact routes here
contactRouter.get('/', (req, res) => {
    res.send('Contact route');
});

// Rutas principales
app.use('/api/products', router);
app.use('/api/contact', contactRouter);

export default app;
