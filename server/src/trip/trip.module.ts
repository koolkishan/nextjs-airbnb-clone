import { Module } from "@nestjs/common";
import { TripModuleBase } from "./base/trip.module.base";
import { TripService } from "./trip.service";
import { TripController } from "./trip.controller";
import { TripResolver } from "./trip.resolver";

@Module({
  imports: [TripModuleBase],
  controllers: [TripController],
  providers: [TripService, TripResolver],
  exports: [TripService],
})
export class TripModule {}
