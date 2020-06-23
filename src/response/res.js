/**
 * Response was successful
 * @param  {Object} values to be value returned
 * @param  {any} res to be response
 * @returns {Object} data object
 */
const success = (values, res) => {
  const data = {
    status: 0,
    message: 'Success',
    values,
  };

  res.json(data);
  res.end();
};

/**
 * Response was error
 * @param  {Object} values to be value returned
 * @param  {any} res to be response
 * @returns {Object} data object
 */
const error = (values, res) => {
  const data = {
    status: 1,
    message: 'Error',
    values,
  };

  res.json(data);
  res.end();
};

/**
 * Response was failed
 * @param  {Object} values to be value returned
 * @param  {any} res to be response
 * @returns {Object} data object
 */
const failed = (values, res) => {
  const data = {
    status: 2,
    message: 'Failed',
    values: values || 'Data Not Found',
  };

  res.json(data);
  res.end();
};

export default {
  success,
  error,
  failed,
};
