import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  date: Date,
  category: String
});

export default mongoose.model('Transaction', transactionSchema);