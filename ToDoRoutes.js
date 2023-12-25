const { Router } = require("express");
const router = Router();

const {
  getTodo,
  saveToDo,
  deleteToDo,
  updateToDo,
} = require("../controller/ToDoController");

router.get("/get-todo", getTodo);
router.post("/save-todo", saveToDo);
router.post("/delete-todo", deleteToDo);
router.post("/update-todo", updateToDo);

module.exports = router;
