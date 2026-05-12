import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePostDto } from 'src/post/dto/create-post.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@Controller('users')
@UseGuards(ApiKeyGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post(':id/posts')
  createPost(@Param('id', ParseIntPipe) id: number, @Body() createPostDto: CreatePostDto) {
    return this.userService.createPost(id, createPostDto);
  }

  @Get(':id/posts')
  findPosts(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findPosts(id);
  }
}