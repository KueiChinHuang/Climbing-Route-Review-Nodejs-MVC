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
const User = require("../models/User");
const Climbingroutes = require("../models/Climbingroutes");

exports.index = (req, res) => {
  res.send('Hello World index!');
};

exports.show = async (req, res) => {
  try {
    console.log(req.params);
    const climbingroute = await Climbingroutes.findById(req.params.id)
      .populate('user');

    res.render(`${viewPath}/show`, {
      pageTitle: climbingroute.name,
      climbingroute: climbingroute
    });
  } catch (error) {
    console.log(`Error in controller show: ${error}`);
    // res.flash('danger', `There was an error displaying this blog: ${error}`);
    res.redirect(`${viewPath}`);
  }
};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New climbing route'
  })
};

exports.create = async (req, res) => {
  try {
    // console.log(req.session.passport);
    const { user: email } = req.session.passport;
    const user = await User.findOne({ email: email });
    // console.log('User: ', user);
    const climbingroutes = await Climbingroutes.create({ user: user._id, ...req.body });

    req.flash('success', 'Review created successfully');
    res.redirect(`/climbingroutes/${climbingroutes.id}`);
  } catch (error) {
    req.flash('danger', `There was an error creating this review: ${error}`);
    req.session.formData = req.body;
    res.redirect(`${viewPath}/new`);
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

