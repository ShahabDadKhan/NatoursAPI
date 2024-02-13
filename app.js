const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

// 1) Middlewares
app.use(morgan("dev"));
app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// 2) Route Handlers
// Tours
const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
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

const deleteTour = (req, res) => {
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

const updateTour = (req, res) => {
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

const getTour = (req, res) => {
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

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "Success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

// Users
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route isn't set up yet",
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route isn't set up yet",
  });
};
const getUserr = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route isn't set up yet",
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route isn't set up yet",
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route isn't set up yet",
  });
};
// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);
// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

// 3) Routes
app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route("/api/v1/users").get(getAllUsers).post(createUser);
app
  .route("/api/v1/users/:id")
  .get(getUserr)
  .patch(updateUser)
  .delete(deleteUser);

// 4) Start Port
const port = 3000;
app.listen(port, () => {
  console.log(`Mejor jugador del mundo Cristianooooooo Roanldoo... ${port}`);
});
