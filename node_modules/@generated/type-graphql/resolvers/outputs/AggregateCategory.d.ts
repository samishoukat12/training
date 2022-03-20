import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
export declare class AggregateCategory {
    _count: CategoryCountAggregate | null;
    _min: CategoryMinAggregate | null;
    _max: CategoryMaxAggregate | null;
}
