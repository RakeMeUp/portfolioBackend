import express, { NextFunction, Request, Response } from "express";
import { deleteCardById, getAllCards, setCard } from "../controllers/cards.controller";

export const cards_route = express.Router();

cards_route.route("/").get(getAllCards).post(setCard).delete(deleteCardById);
/* function middleware(req: Request, res: Response, next: NextFunction) {
    res.send("Parameters - " + JSON.stringify(req.query["id"]));
} */
