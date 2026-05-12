import { IsString, IsNotEmpty, IsOptional, Min, IsInt } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  caption: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  likes?: number;
}