import { IsInt, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";
import { Comment } from "src/comment/entities/comment.entity";
import { OneToMany, ManyToOne } from "typeorm";

export class Post {

    @IsInt()
    id: number;

    @IsInt()
    likes: number;

    @IsString()
    caption: string;

    createdAt: Date;

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];

    @ManyToOne(() => User, user => user.posts)
    user: User;
    
}

