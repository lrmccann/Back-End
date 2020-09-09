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
    console.log("userObj", req.body.userData.userName)
    let account = await db.User.findOne({ 'userData.userName': req.body.userData.userName});
    console.log("account",account)
    if (!account) { 
      const creds = saltHash(req.body.password);
      const token = createSessiontoken();
      req.body.password = creds.password;
      req.body.salt = creds.salt;
      req.body.userData.sessionToken = token;
      await db.User.create(req.body)
        .then(result => res.json(result.userData))
        .catch(err => res.status(422).json(err));
    } else {
      res.json("User name already taken.")
    }
  },
  
  authenticate: async function(req, res) {
    console.log('reqest', req.params.id1)
    const password = req.params.id2;
    let account = await db.User
      .findOne({ 'userData.userName': req.params.id1});
    console.log("account",account)
    if (account) { 
      const passwordHash = account.password;
      let match = await bcrypt.compare(password, passwordHash);
      console.log("match",match)
      if(match) {
        const token = createSessiontoken()
        console.log("token",token)
        console.log("username", account.userData.userName);
        await db.User.findOneAndUpdate(
          {'userData.userName': req.params.id1},
          {'userData.sessionToken': token},
          {new: true}
        )
        .then(result => res.json(result.userData))
      } else {
        res.json("Wrong password.")
      }
    } else {
      res.json("User not found.")
    }
  },

  findAll: async function(req, res) {
    console.log('findall');
    await db.User
      .find({})
      .then(result => {
        let array2 = result.map(function (user) {
          return user._id
        })
        console.log("array2",array2);
        res.json(array2);
      })
      .catch(err => res.status(422).json(err))
  }


        // db.Post.find(req.query)
        //   .sort({ date: -1 })
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
      // }
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
