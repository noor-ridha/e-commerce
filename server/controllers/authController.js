const jwt = require("jsonwebtoken");
const Users = require("../ models/User");

const signUp = async (req, res) => {
  try {
    const newUser = await Users.create({
      // here we only allowed the data that we need to be put into the new user
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    // log in users only when they are signed up
    // creating the token
    // 1 is the payload , 2 the secret
    const tok = jwt.sign({ id: newUser._id }, process.env.JWT_SCRT);

    res.status(200).json({ tok, newUser });
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = { signUp };
