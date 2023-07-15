const Wateches = require("../ models/watchModel");

// get all watches
const getWatch = async (req, res) => {
  // when we leave the obj inside fide empty it means grab all watches, we can also specify whatever value in it and it'll geab all with that value

  const watch = await Wateches.find({});
  res.status(200).json(watch);
};

// get sigle watch
const getSigleWatch = async (req, res) => {
  const { id } = req.params;
  const watch = await Wateches.findById(id);

  // in case the id wasn't found throw an error

  if (!watch) {
    return res
      .status(404)
      .json({ error: "you didn't add this one to the doc" });
  }
  res.status(200).json(watch);
};

// create a new watch doc
const createDoc = async (req, res) => {
  const { title, picture, price, gender, color, description, brand } = req.body;
  try {
    const watch = await Wateches.create({
      title,
      picture,
      price,
      gender,
      color,
      description,
      brand,
    });
    res.status(200).json(watch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update watch
const updateDoc = async (req, res) => {
  try {
    const { id } = req.params;
    const watch = await Wateches.findOneAndUpdate({ _id: id }, req.body);

    // if the doc with the specific id doesn't exist
    if (!watch) {
      return res.status(404).json({ message: `${id} not found` });
    }

    res.status(200).json(watch);
  } catch (error) {
    res.status(500).json({ error: "bad request" });
  }
};

// delete watch
const deleteDoc = async (req, res) => {
  try {
    const { id } = req.params;
    const watch = await Wateches.findOneAndDelete({ _id: id });
    // if the doc with the specific id doesn't exist
    if (!watch) {
      return res.status(404).json({ message: `${id} not found` });
    }
    res.status(200).json({ message: `${id} deleted successfully` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};

module.exports = {
  createDoc,
  getWatch,
  getSigleWatch,
  deleteDoc,
  updateDoc,
};
