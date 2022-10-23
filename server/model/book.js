import mongoose from 'mongoose';
const bookModel = mongoose.Schema(
  {
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number,
  },

  {
    collection: 'books',
  }
);

export default mongoose.model('book', bookModel);
