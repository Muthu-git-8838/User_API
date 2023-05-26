const express = require("express");
const User = require("../model/EntrySchema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send("This is Home Page");
  } catch (e) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

router.post("/add-entry", async (req, res) => {
  try {
    const user = new User(req.body);
    const addEntry = await user.save();
    res.status(201).send({ message: `${addEntry.name} added Succesfully` });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/get-entry", async (req, res) => {
  try {
    const userData = await User.find();
    userData
      ? res.status(200).send(userData)
      : res.status(404).send({ error_message: "There is NO Data for now" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/get-entry/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await User.findById(_id);
    userData
      ? res.status(200).send(userData)
      : res.status(404).send({ error_message: "user NOT found" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/edit-entry/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await User.findByIdAndUpdate(_id, req.body, { new: true });
    userData
      ? res
          .status(201)
          .send({ message: `${userData.name} data updated successfully` })
      : res.status(404).send({ error_message: "User NOT Found" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-entry/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await User.findByIdAndDelete(_id);
    userData
      ? res.status(200).send({ message: "User Deleted Successfully" })
      : res.status(404).send({ error_message: "User NOT Found" });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
