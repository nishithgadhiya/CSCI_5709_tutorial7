const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://gadhiyanishith:Mongo1357@tutorial-6.simioq8.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const schema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
  },
  { versionKey: false }
);

const Data = mongoose.model("Data", schema);

//get all user details
router.get("/users", async (req, res) => {
  const data = await Data.find();
  console.log(data);
  const response = {
    email: data.email,
    firstName: data.firstName,
    id: data._id,
  };
  res
    .status(200)
    .json({ message: "Users retrieved", success: true, users: data });
});

//get specific user details
router.get("/user/:id", async (req, res) => {
  const inputId = req.params.id;
  if (inputId) {
    const data = await Data.findById(inputId);
    res.status(200).json({ success: true, user: data });
  } else {
    res.status(500).json({ message: "Error" });
  }
});

// update specific user details
router.put("/update/:id", async (req, res) => {
  try {
    const inputId = req.params.id;
    const input = req.body;

    if (input?.email && input?.firstName) {
      await Data.findByIdAndUpdate(inputId, input, {
        new: true,
      });
      res.status(200).json({ message: "User updated", success: true });
    } else {
      res.status(400).json({ message: "Bad request invalid parameters" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
});

// add new user
router.post("/add", async (req, res) => {
  try {
    const input = req.body;

    if (input?.email && input?.firstName) {
      const data = new Data(input);
      await data.save();
      res.status(200).json({ message: "User added", success: true });
    } else {
      res.status(400).json({ message: "Bad request invalid parameters" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
});

//get specific user details
router.delete("/delete/:id", async (req, res) => {
  const inputId = req.params.id;
  try {
    if (inputId) {
      const data = await Data.findByIdAndDelete(inputId);
      res.status(200).json({ success: true, message: "User deleted" });
    } else {
      res.status(400).json({ message: "Bad request invalid parameters" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
});

module.exports = router;
