"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateCommentsArgs_1 = require("./args/CreateCommentsArgs");
const Comments_1 = require("../../../models/Comments");
const helpers_1 = require("../../../helpers");
let CreateCommentsResolver = class CreateCommentsResolver {
    async createComments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).comments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Comments_1.Comments, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateCommentsArgs_1.CreateCommentsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateCommentsResolver.prototype, "createComments", null);
CreateCommentsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Comments_1.Comments)
], CreateCommentsResolver);
exports.CreateCommentsResolver = CreateCommentsResolver;
