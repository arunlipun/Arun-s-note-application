import express from "express";
import { createNote, deleteNotes, getNotes, updateNotes } from "../controllers/note.controller.js";
const router=express.Router()

router.post("/createnote",createNote)
router.get("/getNotes",getNotes)
router.put("/updateNotes/:id",updateNotes)
router.delete("/deleteNotes/:id",deleteNotes)
export default router;