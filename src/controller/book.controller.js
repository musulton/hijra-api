import { v4 as uuidv4 } from 'uuid';
import bookDao from '../dao/book.dao';
import response from '../response/res';

const insertOne = (req, res) => {
  const datas = { id: uuidv4(), ...req.body };
  bookDao.insertOne(datas, (error, data) => {
    if (error) response.error(error, res);
    // eslint-disable-next-line no-underscore-dangle
    response.success(`Data inserted with id ${data._id}`, res);
  });
};

const insertMany = (req, res) => {
  const datas = [ ...req.body.data ];
  for (let i = 0; i < datas.length; i++) datas[i].id = uuidv4();
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

const deleteOneById = (req, res) => {
  const { id } = req.params;
  bookDao.deleteOneById(id, (error, data) => {
    if (error) response.error(error, res);
    if (!data) response.failed(null, res);
    // eslint-disable-next-line no-underscore-dangle
    response.success(`Data with id ${data._id} has been deleted`, res);
  });
};

const updateOneById = (req, res) => {
  const { id } = req.params;
  bookDao.updateOneById(id, req.body, (error, data) => {
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
  deleteOneById,
  updateOneById
};
