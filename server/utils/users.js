const { User } = require('../models');
const { generateToken } = require('../utils/auth');
bcrypt = require('bcrypt');



const createUser = async (userData) => {
  const user = await User.create(userData);
  const token = generateToken({ id: user.id });
  return { user, token };
};

const login = async (name, password) => {
  const user = await User.findOne({ where: { name } });
  if (!user) {
    throw new Error('User not found.');
  }
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    throw new Error('Invalid email or password.');
  }
  const token = generateToken({ id: user.id });
  return { user, token };
};

const logout = async (req, res) => {
    if (req.session.loggedIn) { 
    req.session.destroy(() => {
        res.status(204).end();
    }
    )} else {res.status(400).json({ error: error.message })
  }}

module.exports = { createUser, login, logout };