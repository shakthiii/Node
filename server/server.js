const express = require("express");
const app = express();
const QA_data = require("./json/data.json");
const PR_data = require("./json/ProdData.json");
const cors = require("cors");

// change the dataFile to change the json file.
const dataFile = PR_data;

//header

app.use((req, res, next) => {
  Object.assign(req.headers, { samplePgmAuth: true });
  next();
});

//cors

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", Auth, (req, res) => {
  res.json(dataFile);
  // console.log(req.headers);
  // console.log(req.headers.samplePgmAuth);
});

app.listen(5000, () => {
  console.log("server listening on 5000.....");
});

app.get("/api/list/:id", Auth, async (req, res) => {
  const id = req.params.id;
  // let exists = Object.values(dataFile.data).includes(id);
  let exists = typeof dataFile.data[id - 1];

  if (exists !== "undefined") {
    const data = dataFile.data[id - 1];
    res.json(data);
  } else {
    res.json("404");
  }
  // console.log(data);
});

function Auth(req, res, next) {
  if (req.headers.samplePgmAuth) {
    next();
  } else {
    res.json("error");
    // console.log("not valid");
  }
}
