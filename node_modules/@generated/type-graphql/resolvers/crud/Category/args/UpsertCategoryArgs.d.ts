import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";
import { CategoryUpdateInput } from "../../../inputs/CategoryUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
export declare class UpsertCategoryArgs {
    where: CategoryWhereUniqueInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
}
