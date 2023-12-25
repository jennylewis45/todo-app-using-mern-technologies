const ToDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then(() => res.set(201).send("Added successfully"))
    .catch((error) => error);
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete({ _id })
    .then(() => res.set(201).send("Deleted Successsfully"))
    .catch((error) => error);
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate({ _id }, text)
    .then(() => res.set(201).send("Updated Successfully"))
    .catch((error) => console.error(error));
};