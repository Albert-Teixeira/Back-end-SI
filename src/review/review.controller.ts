import { Controller, Post, Body, Param, Delete, Req, UseGuards } from '@nestjs/common';
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

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.reviewService.delete(+id);
  }
}
