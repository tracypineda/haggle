const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wantsSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Want"
  },
  itemName: {
    type: String,
    unique: false,
    required: [true, "text is required"]
  },
  itemDescription: {
    type: Text,
    required: [true, "text is required"]
  },
   
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Want = mongoose.model("Want", wantsSchema);

module.exports = Want;
