import express from 'express';
import Budget from '../models/Budget.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const budgets = await Budget.find();
  res.json(budgets);
});

router.post('/', async (req, res) => {
  await Budget.deleteMany({});
  const entries = Object.entries(req.body).map(([category, amount]) => ({ category, amount }));
  await Budget.insertMany(entries);
  res.status(200).json({ message: 'Budgets updated' });
});

export default router;