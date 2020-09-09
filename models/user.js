const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // body: String,
  password: String,
  salt: String,
  userData: {
    sessionToken: String,
    userName:  String,
    petName:  String,
    breed: String,
    age: Number,
    park: String,
    ball: String,
    frisbee: String,
    email: String,
    photoUrl: String,
    info: String,
    zipCode: String,
    city: String,
    matchesYes: [],
    date: { type: Date, default: Date.now }
  }

});

const User = mongoose.model("Users", usersSchema);

module.exports = User;
