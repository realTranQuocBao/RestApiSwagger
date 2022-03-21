const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catchphraseSchema = new Schema({
  movieName: {
    type: String,
  },
  catchpharese: {
    type: String,
  },
  movieContext: {
    type: String,
  },
});

const Catchpharese = mongoose.model("Catchpharese", catchphraseSchema);

module.exports = Catchpharese;
