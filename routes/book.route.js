import express from "express";
import { Router } from "express";
import { addBooks, getBook, viewBook } from "../controller/book.controller.js";

const router = Router();

router.get("/",getBook);
router.post("/add-books",addBooks)
router.get("/:id",viewBook);

export default router