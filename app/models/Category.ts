import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
