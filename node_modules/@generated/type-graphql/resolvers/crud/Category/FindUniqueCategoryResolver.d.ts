import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { Category } from "../../../models/Category";
export declare class FindUniqueCategoryResolver {
    category(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoryArgs): Promise<Category | null>;
}
