const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controller");
const cors = require("cors");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use(routes);

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the correct origin of your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Now listening at http://localhost:" + PORT + "/")
  );
});
