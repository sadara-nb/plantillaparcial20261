import { IsInt, IsOptional, IsString } from "class-validator";
import { Post } from "src/post/entities/post.entity";
import { OneToMany } from "typeorm";

export class User {

    @IsInt()
    id: number;

    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    bio: string;

    @IsInt()
    followers: number;

    createdAt: Date;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}

