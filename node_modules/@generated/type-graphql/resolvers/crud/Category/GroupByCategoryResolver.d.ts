import { GraphQLResolveInfo } from "graphql";
import { GroupByCategoryArgs } from "./args/GroupByCategoryArgs";
import { CategoryGroupBy } from "../../outputs/CategoryGroupBy";
export declare class GroupByCategoryResolver {
    groupByCategory(ctx: any, info: GraphQLResolveInfo, args: GroupByCategoryArgs): Promise<CategoryGroupBy[]>;
}
