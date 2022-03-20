import { GraphQLResolveInfo } from "graphql";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { Category } from "../../../models/Category";
export declare class FindFirstCategoryResolver {
    findFirstCategory(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoryArgs): Promise<Category | null>;
}
