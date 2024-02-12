const fs = require("fs");
const express = require("express");

const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "Success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

// app.get("/", (req, res) => {
//   console.log("Running fine");
//   res.status(200).send("Hellllo brotherrrr");
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Mejor jugador del mundo Cristianooooooo Roanldoo... ${port}`);
});
