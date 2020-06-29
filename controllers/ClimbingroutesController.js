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

exports.index = async (req, res) => {
  try {
    const climbingroutes = await Climbingroutes
      .find()
      .populate('user')
      .sort({ updatedAt: 'desc'});

    let user ={};
    // console.log(`In controller, req.session.passport: ${JSON.stringify(req.session.passport, null, 2)}`);

    if (typeof (req.session.passport) !== 'undefined') {
      const { user: email } = req.session.passport;
      user = await User.findOne({ email: email });
    }

    res.render(`${viewPath}/index`, {
      pageTitle: 'Reviews',
      climbingroutes: climbingroutes,
      user: user
    })

  } catch (error) {
    req.flash('danger', `There was an error displaying the reviews: ${error}`)
    res.redirect('/');
  }
};

exports.show = async (req, res) => {
  try {
    // console.log(req.params);
    // get climbingroute info
    const climbingroute = await Climbingroutes.findById(req.params.id)
      .populate('user');

    // get current user info
    const { user: email } = req.session.passport;
    const user = await User.findOne({ email: email });

    res.render(`${viewPath}/show`, {
      pageTitle: climbingroute.name,
      climbingroute: climbingroute,
      user: user
    });
  } catch (error) {
    // console.log(`Error in controller show: ${error}`);
    req.flash('danger', `There was an error displaying this blog: ${error}`);
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

exports.edit = async (req, res) => {
  try {
    const climbingroute = await Climbingroutes.findById(req.params.id);
    
    const { user: email } = req.session.passport;
    user = await User.findOne({ email: email });

    if (climbingroute.user.toString() == user._id.toString()){
      res.render(`${viewPath}/edit`,{
        pageTitle: 'Edit',
        user: user,
        formData: climbingroute
      })
    } else {
      throw 'You are not the author.'
    }

  } catch (error) {
    req.flash('danger', `Edit failed: ${error}`);
    res.redirect(`/climbingroutes/${req.params.id}`);
  }
  
};

exports.update = (req, res) => {
  res.send('Hello World update!');
};

exports.delete = (req, res) => {
  res.send('Hello World delete!');
};

