// INSTRUCTIONS:

const User = require("../models/User");
const Climbingroutes = require("../models/Climbingroutes");

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

exports.create = async (req, res) => {
  try {
    console.log(req.session.passport);
    const { user: email } = req.session.passport;
    const user = await User.findOne({ email: email });
    console.log('User: ', user);
    const climbingroutes = await Climbingroutes.create({ user: user._id, ...req.body });

    req.flash('success', 'Review created successfully');
    res.redirect(`/climbingroutes/${climbingroutes.id}`);
  } catch (error) {
    req.flash('danger', `There was an error creating this review: ${error}`);
    req.session.formData = req.body;
    res.redirect('/climbingroutes/new');
  }
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

