const Task = require("../models/task.model");

exports.get = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.create = async (req, res) => {
  const task = new Task({
    text: req.body.text,
    day: req.body.day,
    reminder: req.body.reminder
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.update = async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


exports.delete = async (req, res) => {
  try {
    const deletedTask = await Task.deleteOne({ id: req.params.id });
    res.json(deletedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


