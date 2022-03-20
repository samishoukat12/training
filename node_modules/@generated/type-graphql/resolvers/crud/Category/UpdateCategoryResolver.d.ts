import { GraphQLResolveInfo } from "graphql";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { Category } from "../../../models/Category";
export declare class UpdateCategoryResolver {
    updateCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateCategoryArgs): Promise<Category | null>;
}
