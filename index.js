const express = require("express");
const corsMiddleWare = require("cors");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const hikeRouter = require("./routers/hikes");
const { PORT } = require("./config/constants");

const app = express();

app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/hikes", hikeRouter);
app.use("/auth", authRouter);

app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  const user = req.user;
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
