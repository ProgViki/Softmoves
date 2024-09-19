import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TripModule } from './trip/trip.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { BusModule } from './bus/bus.module';

@Module({
  imports: [AuthModule, UsersModule, TripModule, PrismaModule, AdminModule, BusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
