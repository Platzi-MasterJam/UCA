"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePollutionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pollution_dto_1 = require("./create-pollution.dto");
class UpdatePollutionDto extends mapped_types_1.PartialType(create_pollution_dto_1.CreatePollutionDto) {
}
exports.UpdatePollutionDto = UpdatePollutionDto;
//# sourceMappingURL=update-pollution.dto.js.map