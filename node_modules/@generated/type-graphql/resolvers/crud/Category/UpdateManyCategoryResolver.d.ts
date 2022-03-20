import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCategoryResolver {
    updateManyCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCategoryArgs): Promise<AffectedRowsOutput>;
}
