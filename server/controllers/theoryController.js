const Scale = require('../models/scale');

exports.getAllScales = async (req, res) => {
  try {
    const scales = await Scale.find();
    res.json(scales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
