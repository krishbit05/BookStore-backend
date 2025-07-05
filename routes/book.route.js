import express from "express";
import { Router } from "express";
import { addBooks, getBook } from "../controller/book.controller.js";

const router = Router();

router.get("/",getBook);
router.post("/add-books",addBooks)

export default router