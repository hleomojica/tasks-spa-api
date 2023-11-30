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
    id: req.body.id,
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


