const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
    },
    email: {
      type: Array,
      required: true,
      index: true,
    },
    images: {
      type: Array,
      default: {
        url: "https://via.placeholder.com/200x200",
        public_id: Date.now,
      },
    },
    about: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
