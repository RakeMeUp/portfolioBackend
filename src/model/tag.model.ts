import mongoose from "mongoose";
import { Tag } from "../interfaces/tag.interface";

export const TagSchema = new mongoose.Schema<Tag>({
    name: {
        type: String,
        required: true,
    },
});

export const TagModel = mongoose.model<Tag>("Tag", TagSchema);
