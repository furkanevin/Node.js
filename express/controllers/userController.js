const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

// handlers
exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route tanımlanmadı',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route tanımlanmadı',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route tanımlanmadı',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route tanımlanmadı',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route tanımlanmadı',
  });
};
