import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  source: {
    book: {
      type: String,
      required: true,
      lowercase: true
    },
    number: {
      type: String,
      required: true
    }
  },
  content: {
    arabic: {
      type: String,
      required: true
    },
    latin: {
      type: String,
      required: true
    }
  },
  translation: {
    type: String,
    required: true
  },
  virtue: String
}, {
  collection: 'tb_book'
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
