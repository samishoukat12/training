import { GraphQLResolveInfo } from "graphql";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { Category } from "../../../models/Category";
export declare class FindManyCategoryResolver {
    categories(ctx: any, info: GraphQLResolveInfo, args: FindManyCategoryArgs): Promise<Category[]>;
}
