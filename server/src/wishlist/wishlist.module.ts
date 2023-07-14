import { Module } from "@nestjs/common";
import { WishlistModuleBase } from "./base/wishlist.module.base";
import { WishlistService } from "./wishlist.service";
import { WishlistController } from "./wishlist.controller";
import { WishlistResolver } from "./wishlist.resolver";

@Module({
  imports: [WishlistModuleBase],
  controllers: [WishlistController],
  providers: [WishlistService, WishlistResolver],
  exports: [WishlistService],
})
export class WishlistModule {}
