const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Route Handlers or Controllers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "Success",
    results: tours.length,
    data: {
      tours,
    },
  });
};
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.deleteTour = (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: "Fail",
      message: "Invalid iD",
    });
  }
  res.status(200).json({
    status: "Success",
    data: {
      tour: "Deleted tour...",
    },
  });
};

exports.updateTour = (req, res) => {
  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: "Fail",
      message: "Invalid iD",
    });
  }
  res.status(200).json({
    status: "Success",
    data: {
      tour: "Updated tour...",
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour)
    return res.status(404).json({ status: "Fail", message: "Invalid ID" });
  res.status(200).json({
    status: "Success",
    data: {
      tour,
    },
  });
};
