const router = require("express").Router();
const { User } = require("../../models");
const { createUser, login, logout } = require("../../utils/users");

router.post('/signup', async (req, res) => {
  try {
    const { user, token } = await createUser(req.body);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { user, token } = await login(req.body.email, req.body.password);
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/logout', async (req, res) => {
  try {
    const { user, token } = await logout(req.body.email, req.body.password);
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;