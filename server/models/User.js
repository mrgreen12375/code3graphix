const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const contactSchema = require("./Contact");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      reqired: true,
      match: [/.+@.+\..+/, "please use a valid email address"],
    },
    password: {
      type: String,
      requred: true,
    },
    contact: [contactSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//hash password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

//validate password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("contactCount").get(function () {
  return this.contact.length;
});

const User = model("User", userSchema);

module.exports = User;
