import { ReviewEntity } from "../entities/review.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateReviewDto extends OmitType(ReviewEntity,['id', 'createdAt']){
}
