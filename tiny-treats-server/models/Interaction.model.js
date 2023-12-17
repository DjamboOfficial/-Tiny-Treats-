const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const interactionSchema = new Schema({
  comments: [],
  ratings: [],
});

const Interaction = model("Interactions", interactionSchema);

module.exports = Interaction;
