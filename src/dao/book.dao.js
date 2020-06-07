import Book from '../model/book.model';

/**
   * Insert one
   * @param  {Object} data to be one data book added
   * @param  {Function} callback to be callback after finishing collection method execution
   */
const insertOne = async (data, callback) => {
  try {
    const book = new Book(data);
    const result = await book.save();
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

/**
   * Insert many
   * @param  {Array} data to be multiple data book added
   * @param  {Function} callback to be callback after finishing collection method execution
   */
const insertMany = async (data, callback) => {
  try {
    const result = await Book.insertMany(data);
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

/**
   * Find all
   * @param  {any} _ to be anonimous function
   * @param  {Function} callback to be callback after finishing collection method execution
   */
const findAll = async (_, callback) => {
  try {
    const result = await Book.find({ });
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

/**
   * Find one by id
   * @param  {String} _ to be selector
   * @param  {Function} callback to be callback after finishing collection method execution
   */
const findOneById = async (id, callback) => {
  try {
    const result = await Book.findOne({ _id: id });
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

/**
   * Find all by prop
   * @param  {String} prop to be property selector
   * @param  {String} value to be value selector
   * @param  {Function} callback to be callback after finishing collection method execution
   */
const findAllByProp = async (prop, value, callback) => {
  try {
    const result = await Book.find({ [prop]: value });
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

/**
   * Delete one by id
   * @param  {String} id to be selector
   * @param  {Function} callback to be callback after finishing collection method execution
   */
const deleteOneById = async (id, callback) => {
  try {
    const result = await Book.findByIdAndDelete(id);
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};

/**
   * Find all by prop
   * @param  {String} id to be id selector
   * @param  {Object} data to be new data
   * @param  {Function} callback to be callback after finishing collection method execution
   */
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
