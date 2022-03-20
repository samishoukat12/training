import { User,CreateUserArgs } from "@generated/type-graphql";
import {
  Arg,
  Args, 
  Mutation,
  Resolver,
} from "type-graphql";
import { Service } from "typedi";
import { AuthService } from "../services/auth-service";


@Service()
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async register(
    @Args() {data}:CreateUserArgs,
  ): Promise<User | null> {    
    return await this.authService.register(data);
  }

  @Mutation(() => User)
  async login(
    @Arg("email", () => String)
    email: string,
    @Arg("password", () => String)
    password: string
  ): Promise<User  | null> {    
    const student = await this.authService.login(email, password);
    return student;
  }
}