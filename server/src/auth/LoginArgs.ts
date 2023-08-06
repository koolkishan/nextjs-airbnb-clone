import { ArgsType, Field } from "@nestjs/graphql";
import { CheckUserValues, Credentials, SignupCredentials } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: Credentials;
}

@ArgsType()
export class SignupArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: SignupCredentials;
}

@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  CheckUserValues!: CheckUserValues;
}
