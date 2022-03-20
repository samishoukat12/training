import { GraphQLResolveInfo } from "graphql";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { Category } from "../../../models/Category";
export declare class CreateCategoryResolver {
    createCategory(ctx: any, info: GraphQLResolveInfo, args: CreateCategoryArgs): Promise<Category>;
}
