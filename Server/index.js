import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import transactionsRouter from './routes/transactions.js';
import budgetsRouter from './routes/budgets.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionsRouter);
app.use('/api/budgets', budgetsRouter);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));