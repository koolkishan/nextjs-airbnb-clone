import { Body, Controller, Post, Get, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { CheckUserValues, Credentials, SignupCredentials } from "./Credentials";
import { UserInfo } from "./UserInfo";
import { User } from "../user/base/User";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @ApiOkResponse({ type: User })
  @Get("me")
  async me(@Req() request: Request): Promise<User> {
    return this.authService.me(request.headers.authorization);
  }
  @Post("check-user")
  async checkUser(@Body() body: CheckUserValues): Promise<User> {
    return this.authService.checkUser(body.email);
  }
  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }
  @Post("signup")
  async signup(@Body() body: SignupCredentials): Promise<UserInfo> {
    return this.authService.signup(body);
  }
}
