import { isEmptyArray } from '../utils/conditional';
import bookDao from '../dao/book.dao';
import response from '../response/res';

const insertOne = (req, res) => {
  bookDao.insertOne(req.body, (error, data) => {
    if (error) response.error(error, res);
    response.success(`Data inserted with id ${data.id}`, res);
  });
};

const insertMany = (req, res) => {
  bookDao.insertMany(datas, (error, data) => {
    if (error) response.error(error, res);
    response.success(`As much data entered ${data.length} item`, res);
  });
};

const getAll = (req, res) => {
  bookDao.findAll(req.body, (error, data) => {
    if (error) response.error(error, res);
    response.success(data, res);
  });
};

const getOneById = (req, res) => {
  bookDao.findOneById(req.params.id, (error, data) => {
    if (error) response.error(error, res);
    response.success(data, res);
  });
};

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

const deleteOneById = (req, res) => {
  bookDao.deleteOneById(req.params.id, (error, data) => {
    if (error) response.error(error, res);
    if (!data) response.failed(null, res);
    // eslint-disable-next-line no-underscore-dangle
    response.success(`Data with id ${data._id} has been deleted`, res);
  });
};

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
