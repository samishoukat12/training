import { GraphQLResolveInfo } from "graphql";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";
import { Category } from "../../../models/Category";
export declare class UpsertCategoryResolver {
    upsertCategory(ctx: any, info: GraphQLResolveInfo, args: UpsertCategoryArgs): Promise<Category>;
}
