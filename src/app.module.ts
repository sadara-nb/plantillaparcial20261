import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MetricsModule } from './auth/metrics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'banco.db', // archivo local
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    PostModule,
    AuthModule, 
    MetricsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// 1. El guard se ejecuta antes del controlador.
// 2. Toma el request con ctx.switchToHttp().getRequest().
// 3. Lee el header x-api-key.
// 4. Le pregunta al AuthService si la key existe.
// 5. Si no existe, lanza UnauthorizedException.
// 6. Si existe, retorna true y deja pasar la petición.


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'better-sqlite3',
//       database: 'banco.db', // archivo local
//       entities: [Account, Loan],
//       synchronize: true,
//       autoLoadEntities: true,
// solo dev
//       //true crea o altera las tablas automáticamente al arrancar, comparando
//       // las entidades con el esquema real de la base de datos.
//     }),
//     AuthModule,
//     CalcModule,
//     FinanceModule,
//     BankModule, // ← nuevo
//   ],
// })
// export class AppModule {}
