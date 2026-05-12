import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  followers?: number;
}