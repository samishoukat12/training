import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { AggregateCategory } from "../../outputs/AggregateCategory";
export declare class AggregateCategoryResolver {
    aggregateCategory(ctx: any, info: GraphQLResolveInfo, args: AggregateCategoryArgs): Promise<AggregateCategory>;
}
