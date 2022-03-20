import { AuthChecker, ResolverData } from "type-graphql";
import { Inject, Service } from "typedi";
import { UserContext } from "../types/user-context";
import { User, Role, UserCreateInput } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import { prismaToken } from "../types/typedi-tokens";
import { UserInfo } from "../model/user-info";
import Container from "typedi";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";
import bycrypt from "bcryptjs";
import { sendEmail } from "../../utils/mail";


export interface IJwtDecode {
  (authHeader: string): any;
}

export const createAuthService = (): AuthService => {
  return new AuthService(Container.get(prismaToken), jwtDecode);
};
export interface IAuthService {
  isUserAuthorized: AuthChecker<UserContext, Role>;
  getUserInfo(authHeader: string): UserInfo;
}
@Service({ factory: createAuthService })
export class AuthService implements IAuthService {
  constructor(
    @Inject(prismaToken)
    private readonly prisma: PrismaClient,
    private readonly jwtDecode: IJwtDecode
  ) { }

  isUserAuthorized = async (
    token: ResolverData<UserContext>
  ): Promise<boolean> => {
    console.log("run");
    return true;
  };

  getUserInfo(authHeader: string): UserInfo {
    try {
      const jwtKey = "dasgvjtnkkweroutojfldmvturhglmslfjgibtrle";
      const decodedToken: any = jwt.verify(authHeader, jwtKey);
      return {
        roles: decodedToken ? [decodedToken.role] : [],
        id: decodedToken ? decodedToken.id : "",
      };
    } catch (e) {
      return {
        roles: [],
        id: "",
      };
    }
  }

  login = async (email: string, password: string): Promise<User> => {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      rejectOnNotFound: true,
    });
    if (!(await bycrypt.compare(password, user.password))) {
      throw new Error("Your password is not correct");
    }

    const jwtKey = "dasgvjtnkkweroutojfldmvturhglmslfjgibtrle";
    var jstoken = jwt.sign(
      { id: user.id, role: user.role, email: user.email, name: user.name },
      jwtKey,
      { expiresIn: 5 }
    );
    user.token = jstoken;
    return user;
  };
  register = async ({
    id,
    name,
    email,
    password,
    cnic,
    phone,
    role,
  }: UserCreateInput): Promise<User | null> => {

    const checkExistence = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (checkExistence) {
      throw new Error("Email Already Exist");
    }
    // if (role === "SUPERADMIN") {
    //   throw new Error("Super Admin cannot be created");
    // }
    const encryptedPassword = await bycrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
        cnic,
        phone,
      },
    });
    const portal = process.env.STAFFPORTAL;
    await sendEmail(portal, email, password, name);
    return user;
  };
}