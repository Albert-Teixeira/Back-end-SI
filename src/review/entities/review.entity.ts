import { Review } from "@prisma/client";

export class ReviewEntity implements Review {
    id: number;
    text: string;
    user: string;
    profilePictureUrl: string;
    productId: number;
    createdAt: Date;
}
