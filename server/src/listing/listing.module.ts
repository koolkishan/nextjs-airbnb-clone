import { Module } from "@nestjs/common";
import { ListingModuleBase } from "./base/listing.module.base";
import { ListingService } from "./listing.service";
import { ListingController } from "./listing.controller";
import { ListingResolver } from "./listing.resolver";

@Module({
  imports: [ListingModuleBase],
  controllers: [ListingController],
  providers: [ListingService, ListingResolver],
  exports: [ListingService],
})
export class ListingModule {}
