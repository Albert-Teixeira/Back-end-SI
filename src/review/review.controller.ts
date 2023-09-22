import { Controller, Post, Body, Param, Delete, Req, UseGuards, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { OAuthGuard } from '../guards/oauth.guard';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(OAuthGuard)
  @Post()
  create(@Body() createReviewDto: CreateReviewDto, @Req() req: any) {
    console.log(req.user);
    return this.reviewService.create(createReviewDto, req.user);
  }

  @UseGuards(OAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number, @Req() req: any) {
    const review = await this.reviewService.findOne(+id)

    if(!review) throw new NotFoundException("Review not found")

    if(review.userEmail !== req.user.email) throw new ForbiddenException("You can't delete this review")

    return this.reviewService.delete(+id);
  }
}
