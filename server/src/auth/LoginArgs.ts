import { ArgsType, Field } from "@nestjs/graphql";
import { CheckUserValues, Credentials } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: Credentials;
}

@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  CheckUserValues!: CheckUserValues;
}
