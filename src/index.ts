import express from "express";
import dotenv from "dotenv";
import { cards_route } from "./routes/cards.route";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 8000;
const db = process.env.DB || "mongodb://127.0.0.1:27017/portfolio";

const app = express();

const main = async (): Promise<void> => {
    mongoose.connect(db);
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Hello");
    });
    app.use("/cards", cards_route);
    app.use("*", (req, res) => {
        res.status(404).json({ error: "not found" });
    });

    app.listen(port, () => console.log("started"));
};

main().catch(console.error);
