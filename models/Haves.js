const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const havesSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
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
   
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Have = mongoose.model("Have", havesSchema);

module.exports = Have;
