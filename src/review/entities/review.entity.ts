import { Review } from "@prisma/client";
import { IsDate, IsInt, IsString } from "class-validator";

export class ReviewEntity implements Review {
    @IsInt()
    id: number;

    @IsString()
    userEmail: string

    @IsString()
    text: string;

    @IsString()
    user: string;

    @IsString()
    profilePictureUrl: string;

    @IsInt()
    productId: number;

    @IsDate()
    createdAt: Date;
}
