import mongoose from "mongoose";
import { Card } from "../interfaces/card.interface";
import { TagSchema } from "./tag.model";

export const CardSchema = new mongoose.Schema<Card>({
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    image: {
        type: String,
    },
    url: {
        type: String,
    },
    tags: [
        {
            type: TagSchema,
        },
    ],
});

export const CardModel = mongoose.model<Card>("Card", CardSchema);
