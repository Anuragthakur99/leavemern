import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import leaveRoutes from './routes/leaveRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/leaves', leaveRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
