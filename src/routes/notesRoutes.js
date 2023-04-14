const express = require("express");
const { getNotes,getSingleNotes, createNote, deleteNote, updateNote } = require("../controller/noteController");
const auth = require("../middleware/auth");
const noteRouter = express.Router();

noteRouter.get("/get/all", auth, getNotes);

noteRouter.get("/get/:id", auth, getSingleNotes);

noteRouter.post("/create", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

module.exports = noteRouter;