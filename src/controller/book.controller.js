import { isEmptyArray } from '../utils/conditional';
import bookDao from '../dao/book.dao';
import response from '../response/res';

/**
   * Insert one data
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} id new data added
   */
const insertOne = (req, res) => {
  bookDao.insertOne(req.body, (error, data) => {
    if (error) response.error(error, res);
    response.success(`Data inserted with id ${data.id}`, res);
  });
};

/**
   * Insert multiple data
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} amount of data added
   */
const insertMany = (req, res) => {
  bookDao.insertMany(datas, (error, data) => {
    if (error) response.error(error, res);
    response.success(`As much data entered ${data.length} item`, res);
  });
};

/**
   * Get all data
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} all data
   */
const getAll = (req, res) => {
  bookDao.findAll(req.body, (error, data) => {
    if (error) response.error(error, res);
    response.success(data, res);
  });
};

/**
   * Get one data by id
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} one data
   */
const getOneById = (req, res) => {
  bookDao.findOneById(req.params.id, (error, data) => {
    if (error) response.error(error, res);
    response.success(data, res);
  });
};

/**
   * Get multiple data by prop
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} one or multiple data
   */
const filterByProp = (req, res) => {
  const params = req.params.filter;
  const propIndex = params.indexOf('=');
  const prop = params.substr(0, propIndex);
  const value = params.substr(propIndex + 1);
  bookDao.findAllByProp(prop, value, (error, data) => {
    if (error) response.error(error, res);
    if (isEmptyArray(data)) response.failed(null, res);
    response.success(data, res);
  });
};

/**
   * Delete one by id
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} deleted data id
   */
const deleteOneById = (req, res) => {
  bookDao.deleteOneById(req.params.id, (error, data) => {
    if (error) response.error(error, res);
    if (!data) response.failed(null, res);
    // eslint-disable-next-line no-underscore-dangle
    response.success(`Data with id ${data._id} has been deleted`, res);
  });
};

/**
   * Update or insert new data
   * @param  {any} req to be request
   * @param  {any} res to be response
   * @returns {Object} id data that is updated or recently added
   */
const updateOneById = (req, res) => {
  bookDao.updateOneById(req.params.id, req.body, (error, data) => {
    if (error) response.error(error, res);
    if (!response) response.failed(null, res);
    // eslint-disable-next-line no-underscore-dangle
    response.success(`Data with id ${data._id} has been updated`, res);
  });
};

export default {
  insertOne,
  insertMany,
  getAll,
  getOneById,
  filterByProp,
  deleteOneById,
  updateOneById
};
