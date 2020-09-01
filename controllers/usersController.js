const db = require("../models");
const bcrypt = require('bcrypt');

const createSessiontoken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const saltHash = (pass) => {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(pass, salt);
    console.log("saltHash", salt, password)
    return {password, salt};
}

// Defining methods for the postsController
module.exports = {
  
  create: async function(req, res) {
    console.log("cretate-func", req.body)
    const creds = saltHash(req.body.password);
    const token = createSessiontoken();
    req.body.password = creds.password;
    req.body.salt = creds.salt;
    req.body.sessionToken = token;
    //!!!!have to create a function for chacking out if th euser name is already exist
    await db.User.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  
  authenticate: async function(req, res) {
    console.log('reqest', req.params.id1)
    const userObj = {
      userName: req.params.id1
    }; 
    const password = req.params.id2;
    const account = await db.User.findOne(userObj);
    const passwordHash = account.password;
    const match = await bcrypt.compare(password, passwordHash);
 
    if(match) {
      //login 
      res.json("User identeficated.")
    } else {
      res.json("Wrong credantials.")
    }
   } 

  // findAll: function(req, res) {
      //   db.Post.find(req.query)
      //     .sort({ date: -1 })
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // },
  // update: function(req, res) {
    //   db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Post.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
