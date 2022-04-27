const mongoose = require('mongoose')
const { Schema } = mongoose;


const UserSchema = new Schema({
  status:{
      type:Boolean,
      
  },
  name:{
      type: String,
      required: true
  },
  email:{
      type: String,
      required: true,
      unique:true,
  },
  password:{
      type: String,
      required: true
  },
  Date:{
      type: Date,
      default: Date.now,
  },

  
});
User = mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;