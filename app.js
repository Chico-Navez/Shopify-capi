// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || "3030";

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Facebook Events Api");
});

app.post("/", async (req, res) => {
  axios
    .post(process.env.EVENT_FACEBOOK_URL, {
      data: req.body.data,
    })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
