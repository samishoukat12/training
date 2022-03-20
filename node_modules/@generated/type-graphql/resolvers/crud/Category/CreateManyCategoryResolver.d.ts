import { GraphQLResolveInfo } from "graphql";
import { CreateManyCategoryArgs } from "./args/CreateManyCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCategoryResolver {
    createManyCategory(ctx: any, info: GraphQLResolveInfo, args: CreateManyCategoryArgs): Promise<AffectedRowsOutput>;
}
