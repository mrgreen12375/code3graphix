const { Schema } = require("mongoose");

const contactSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = contactSchema;
