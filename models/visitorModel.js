const mongoose = require('mongoose');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const visitorSchema = new mongoose.Schema(
   { 
      name: {
         type : String,
         required: [true, "Please enter a name"]
  },

      email: {
         type: String,
         required : [true, "Please enter an email"],
         unique: true,
         validate: {
            validator: function (v) {
               return emailRegex.test(v);
            },
            message: props => `$ {props.value} is not a valid email address!`
         }
      }, 

      message: {
         type: String,
         required: true,
         minlength: [10, 'Message must be at least 10 characters long'],
         maxlength: [1000, 'Message must be less than 1000 characters long'],
         trim: true
      },

      time : { type : Date, default: Date.now }

   }

);
const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;


