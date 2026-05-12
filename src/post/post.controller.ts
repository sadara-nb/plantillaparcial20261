import { Controller, Post, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@Controller('posts')
@UseGuards(ApiKeyGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post(':id/comments')
  createComment(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateCommentDto,
  ) {
    return this.postService.createComment(id, dto);
  }
} 