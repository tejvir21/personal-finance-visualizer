import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  category: String,
  amount: Number
});

export default mongoose.model('Budget', budgetSchema);