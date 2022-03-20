"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const tslib_1 = require("tslib");
const sdk_1 = require("@prisma/sdk");
const fs_1 = require("fs");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const generate_code_1 = (0, tslib_1.__importDefault)(require("../generator/generate-code"));
const removeDir_1 = (0, tslib_1.__importDefault)(require("../utils/removeDir"));
const helpers_1 = require("../generator/helpers");
const emit_block_1 = require("../generator/emit-block");
const helpers_2 = require("./helpers");
async function generate(options) {
    const outputDir = (0, sdk_1.parseEnvValue)(options.generator.output);
    await fs_1.promises.mkdir(outputDir, { recursive: true });
    await (0, removeDir_1.default)(outputDir, true);
    const prismaClientProvider = options.otherGenerators.find(it => (0, sdk_1.parseEnvValue)(it.provider) === "prisma-client-js");
    const prismaClientPath = (0, sdk_1.parseEnvValue)(prismaClientProvider.output);
    const prismaClientDmmf = require(prismaClientPath)
        .dmmf;
    const generatorConfig = options.generator.config;
    const externalConfig = {
        emitDMMF: (0, helpers_2.parseStringBoolean)(generatorConfig.emitDMMF),
        emitTranspiledCode: (0, helpers_2.parseStringBoolean)(generatorConfig.emitTranspiledCode),
        simpleResolvers: (0, helpers_2.parseStringBoolean)(generatorConfig.simpleResolvers),
        useOriginalMapping: (0, helpers_2.parseStringBoolean)(generatorConfig.useOriginalMapping),
        useUncheckedScalarInputs: (0, helpers_2.parseStringBoolean)(generatorConfig.useUncheckedScalarInputs),
        emitIdAsIDType: (0, helpers_2.parseStringBoolean)(generatorConfig.emitIdAsIDType),
        emitOnly: (0, helpers_2.parseStringArray)(generatorConfig.emitOnly, "emitOnly", emit_block_1.ALL_EMIT_BLOCK_KINDS),
        customPrismaImportPath: generatorConfig.customPrismaImportPath,
    };
    const internalConfig = {
        outputDirPath: outputDir,
        relativePrismaOutputPath: (0, helpers_1.toUnixPath)(path_1.default.relative(outputDir, prismaClientPath)),
        absolutePrismaOutputPath: prismaClientPath.includes("node_modules")
            ? "@prisma/client"
            : undefined,
    };
    if (externalConfig.emitDMMF) {
        await Promise.all([
            fs_1.promises.writeFile(path_1.default.resolve(outputDir, "./dmmf.json"), JSON.stringify(options.dmmf, null, 2)),
            fs_1.promises.writeFile(path_1.default.resolve(outputDir, "./prisma-client-dmmf.json"), JSON.stringify(prismaClientDmmf, null, 2)),
        ]);
    }
    // TODO: replace with `options.dmmf` when the spec match prisma client output
    await (0, generate_code_1.default)(prismaClientDmmf, {
        ...externalConfig,
        ...internalConfig,
    });
    return "";
}
exports.generate = generate;
//# sourceMappingURL=prisma-generator.js.map