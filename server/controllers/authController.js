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

    res.status(200).json(newUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = { signUp };
