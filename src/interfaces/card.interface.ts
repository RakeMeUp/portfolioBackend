import { Tag } from "./tag.interface";

export type Card = {
    title: string;
    details: string;
    url: string;
    tags: Tag[];
    image: string;
};
