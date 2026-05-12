import { Post } from "src/post/entities/post.entity";
import { EngagementQueryDto } from "./dto/engagementquery.dto";
import { CpmQueryDto } from "./dto/cpmquery.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MetricsService {
    private keys: Set<string> = new Set();

    engagement(dto: EngagementQueryDto){
        const { likes } = dto;
        const {comments} = dto;
        const {followers} = dto;
        return {
            engagement: (likes + comments) / followers * 100
        };
    }

    cpm(dto: CpmQueryDto){
        const {cost, impressions} = dto;
        return {
            cpm: cost / impressions * 1000
        };
    }
}
