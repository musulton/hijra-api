import Book from '../model/book.model';

const insertOne = async (data, callback) => {
  try {
    const book = new Book(data);
    const result = await book.save();
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const insertMany = async (data, callback) => {
  try {
    const result = await Book.insertMany(data);
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const findAll = async (_, callback) => {
  try {
    const result = await Book.find({ });
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const findOneById = async (id, callback) => {
  try {
    const result = await Book.findOne({ _id: id });
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const findAllByProp = async (prop, value, callback) => {
  try {
    const result = await Book.find({ [prop]: value });
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const deleteOneById = async (id, callback) => {
  try {
    const result = await Book.findByIdAndDelete(id);
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

const updateOneById = async (id, data, callback) => {
  try {
    await Book.findByIdAndUpdate(id, data);
    await Book.save();
    callback(null, data);
  } catch (error) {
    callback(error, null);
  }
};

export default {
  insertOne,
  insertMany,
  findAll,
  findOneById,
  findAllByProp,
  deleteOneById,
  updateOneById
};
