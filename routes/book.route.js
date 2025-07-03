import express from "express";
import { Router } from "express";
import { getBook } from "../controller/book.controller.js";

const router = Router();

router.get("/",getBook);

export default router