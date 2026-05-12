import { Controller, Get, Query } from "@nestjs/common";
import { MetricsService } from "./metrics.service";
import { EngagementQueryDto } from "./dto/engagementquery.dto";
import { CpmQueryDto } from "./dto/cpmquery.dto";

@Controller('metrics')
export class MetricsController {
    constructor(private metricsService: MetricsService){}

    @Get('engagement')
    engagement(@Query() query: EngagementQueryDto) {
        return this.metricsService.engagement(query);
    }

    @Get('cpm')
    cpm(@Query() query: CpmQueryDto) {
        return this.metricsService.cpm(query);
    }

}