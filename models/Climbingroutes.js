// INSTRUCTIONS
/*
  Create a new resource model that uses the User
  as an associative collection (examples):
  - User -> Books
  - User -> Reservation

  Your model must contain at least three attributes
  other than the associated user and the timestamps.

  Your model must have at least one helpful virtual
  or query function. For example, you could have a
  book's details output in an easy format: book.format()
*/

const mongoose = require('mongoose');

const ClimbingrouteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  review: {
    type: Number,
    require: false
  },
  difficulty: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: false
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Climbingroute', ClimbingrouteSchema);