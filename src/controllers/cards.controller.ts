import { NextFunction, Request, Response } from "express";
import { CardModel } from "../model/card.model";
import createHttpError from "http-errors";

export const getAllCards = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await CardModel.find();
        res.status(200).json({ status: "success", entries: data });
    } catch {
        next(createHttpError(500, "internal server error"));
    }
};

export const setCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await CardModel.create(req.body);
        res.status(201).json({ status: "created", created_entry: data });
    } catch {
        next(createHttpError(500, "internal server error"));
    }
};

export const deleteCardById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await CardModel.findByIdAndDelete(
            JSON.stringify(req.query["id"]).replaceAll('"', "")
        );

        res.status(200).json({
            status: "deleted",
            deletedEntry: `id is ${JSON.stringify(req.query["id"]).replaceAll('"', "")}`,
        });
    } catch {
        next(createHttpError(500, "internal server error"));
    }
};
