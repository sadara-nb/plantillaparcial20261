import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Post) private postRepo: Repository<Post>,
  ) {}

  create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find({ relations: ['posts'] });
  }

  async createPost(userId: number, dto: CreatePostDto): Promise<Post> {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new NotFoundException(`Usuario ${userId} no existe`);
    const post = this.postRepo.create({ ...dto, user });
    return this.postRepo.save(post);
  }

  async findPosts(userId: number): Promise<Post[]> {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new NotFoundException(`Usuario ${userId} no existe`);
    return this.postRepo.find({ where: { user: { id: userId } }, relations: ['comments'] });
  }
}