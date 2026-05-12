import { IsString, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  caption: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  likes?: number;
}