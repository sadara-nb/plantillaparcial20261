import { IsInt } from "class-validator";
import { IsString } from "class-validator/types/decorator/typechecker/IsString";
import { User } from "src/user/entities/user.entity";
import { ManyToOne, OneToMany } from "typeorm";

export class CreatePostDto {
        @IsInt()
        id: number;
    
        @IsInt()
        likes: number;
    
        @IsString()
        caption: string;
    
        createdAt: Date;
}
