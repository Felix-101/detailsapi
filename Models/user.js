const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  location: {
    type: String,
    default: "Ibadan"
  },
  greeting: {
    type: String,
    default: function() {
      return `Hello, Tolu! The temperature is 36 degrees Celsius in ${this.location}`;
    }
  }
});

module.exports = mongoose.model('user', userSchema);
