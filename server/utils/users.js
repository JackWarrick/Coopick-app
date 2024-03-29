const { User } = require("../models");
const { generateToken } = require("../utils/auth");
bcrypt = require("bcrypt");

const createUser = async (userData) => {
  const user = await User.create(userData);
  const token = generateToken({ id: user.id });
  return { user, token };
};

const login = async (name, password) => {
  console.log(name, password);
  const user = await User.findOne({ where: { name } });
  if (!user) {
    throw new Error("User not found.");
  }
  const isMatch = await user.checkPassword(password);
  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }
  const token = generateToken({ id: user.id });
  return { user, token };
};

module.exports = { createUser, login };
