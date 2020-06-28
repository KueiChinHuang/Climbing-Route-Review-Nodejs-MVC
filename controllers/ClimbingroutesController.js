// INSTRUCTIONS:
/*
  Create a new resource controller that uses the
  User as an associative collection (examples):
  - User -> Books
  - User -> Reservation

  The resource controller must contain the 7 resource actions:
  - index
  - show
  - new
  - create
  - edit
  - update
  - delete
*/
const viewPath = 'climbingroutes';

exports.index = (req, res) => {
  res.send('Hello World index!');
};

exports.show = (req, res) => {
  res.send('Hello World show!');
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New climbing route'
  })
};

exports.create = (req, res) => {
  res.send('Hello World create!');
};

exports.edit = (req, res) => {
  res.send('Hello World edit!');
};

exports.update = (req, res) => {
  res.send('Hello World update!');
};

exports.delete = (req, res) => {
  res.send('Hello World delete!');
};

