import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCategoryResolver {
    deleteManyCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCategoryArgs): Promise<AffectedRowsOutput>;
}
