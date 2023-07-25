const Users = require("../ models/User");

const signUp = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);

    res.status(200).json(newUser);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

module.exports = { signUp };
