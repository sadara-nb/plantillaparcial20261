import { IsInt, IsString } from "class-validator";
import { Post } from "src/post/entities/post.entity";
import { ManyToOne } from "typeorm";

export class Comment {

    @IsInt()
    id: number;

    @IsString()
    content: string;

    @IsString()
    author: string;

    createdAt: Date;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

}
