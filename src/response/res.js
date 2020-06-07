const success = (values, res) => {
  const data = {
    status: 0,
    message: 'Success',
    values
  };

  res.json(data);
  res.end();
};

const error = (values, res) => {
  const data = {
    status: 1,
    message: 'Error',
    values
  };

  res.json(data);
  res.end();
};

const failed = (values, res) => {
  const data = {
    status: 2,
    message: 'Failed',
    values: values || 'Data Not Found'
  };

  res.json(data);
  res.end();
};

export default {
  success,
  error,
  failed
};
