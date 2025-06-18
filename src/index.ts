import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from 'cors';
import './config/db';
import authRoutes from './routes/auth.routes';
import dashboardRoutes from "./routes/dashboard.routes";
import stepDaaInfo from "./routes/codeEditor.routes";
import { errorHandler } from './middlewares/error.middleware';
import { API, AUTH, CODE_EDITOR, DASHBOARD } from './constants/CONSTANTS';

dotenv.config();
const app = express();

app.use(cors({
    origin: ['http://localhost:5173', "https://ilovedsa.com"],
    credentials: true 
}));

app.use(express.json());
app.use(cookieParser());

app.use(API + AUTH, authRoutes);
app.use(API + DASHBOARD, dashboardRoutes)
app.use(API + CODE_EDITOR, stepDaaInfo)
// app.use('/api/chat', chatRoutes);
// app.use('/api/match', matchRoutes);
// app.use('/api/music', musicRoutes);
// app.use('/api/session', sessionRoutes);
// app.use('/api/user', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
