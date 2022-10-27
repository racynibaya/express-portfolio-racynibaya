import mongoose from 'mongoose';
const contactModel = mongoose.Schema(
  {
    name: String,
    description: String,
    email: String,
    number: String,
  },

  {
    collection: 'contacts',
  }
);

export default mongoose.model('contact', contactModel);
