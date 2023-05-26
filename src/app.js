const express = require("express");
const app = express();
require("dotenv").config();
require("./db/conn");
const router = require("./routes/router");
const PORT = process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
