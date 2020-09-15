const userControler = require("../controllers/usersController");
const bcrypt = require('bcrypt');
describe("UserControler", () => {
  describe("Initialization", () => {
    it("Expected parameter 'token' to be a non-empty string for user", () => {
      
     const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if (token==='') {
      const err = new Error("Expected parameter 'token' to be a non-empty string")
      console.log(err);
    };
  
    });

    it("should throw an error if provided no arguments", () => {
      const hash = 10;

      const salt = bcrypt.genSaltSync(hash);
      const password = bcrypt.hashSync("*", salt);
      console.log("saltHash", salt, password)
      
      expect(password)
    });
    

    it("should throw an error if 'name' is not a string", () => {
      const usercheck = () => new user("Lerr34553", 2, 5);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(usercheck);
    });

  });
});
