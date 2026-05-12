import { IsInt, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class EngagementQueryDto {
  @Type(() => Number) // string → number (query params)
  @IsInt()
  @Min(0)
  likes: number;

  @Type(() => Number) // string → number (query params)
  @IsInt()
  @Min(0)
  comments: number;

  @Type(() => Number) // string → number (query params)
  @IsInt()
  @Min(1)
  followers: number;
}
