import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { MetricsService } from './metrics.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService, private metricsService: MetricsService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.auth.register(dto);
  }

  @Get('metrics/engagement')
  getEngagement(
    @Param('engagement', ParseIntPipe) engagement: number,
  ) {
    return this.metricsService.engagement({ likes: engagement });
  }

  @Get('metrics/cpm')
  getCPM(
    @Param('cpm', ParseIntPipe) cpm: number,
  ) {
    return this.metricsService.cpm({ cost: cpm });
  }
}
