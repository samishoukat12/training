import { GraphQLResolveInfo } from "graphql";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { Category } from "../../../models/Category";
export declare class DeleteCategoryResolver {
    deleteCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteCategoryArgs): Promise<Category | null>;
}
