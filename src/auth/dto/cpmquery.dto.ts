import { Param, Query } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsInt, IsNumber, IsPositive, Min } from "class-validator";

export class CpmQueryDto {

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    cost: number;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    impressions: number;

}
