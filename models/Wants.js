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
    type: String,
    required: [true, "text is required"]
  },
  wantImage: {
    type: String
  },
  userName: {
    type: String,
    required: [true, "please enter your username"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Want = mongoose.model("Want", wantsSchema);

module.exports = Want;
