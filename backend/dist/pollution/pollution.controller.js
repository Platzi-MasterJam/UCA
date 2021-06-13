"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollutionController = void 0;
const common_1 = require("@nestjs/common");
const pollution_service_1 = require("./pollution.service");
const create_pollution_dto_1 = require("./dto/create-pollution.dto");
const update_pollution_dto_1 = require("./dto/update-pollution.dto");
let PollutionController = class PollutionController {
    constructor(pollutionService) {
        this.pollutionService = pollutionService;
    }
    create(createPollutionDto) {
        return this.pollutionService.create(createPollutionDto);
    }
    findAll() {
        return this.pollutionService.findAll();
    }
    findOne(city) {
        return this.pollutionService.findOne(city);
    }
    update(id, updatePollutionDto) {
        return this.pollutionService.update(+id, updatePollutionDto);
    }
    remove(id) {
        return this.pollutionService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pollution_dto_1.CreatePollutionDto]),
    __metadata("design:returntype", void 0)
], PollutionController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PollutionController.prototype, "findAll", null);
__decorate([
    common_1.Get(':city'),
    __param(0, common_1.Param('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PollutionController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pollution_dto_1.UpdatePollutionDto]),
    __metadata("design:returntype", void 0)
], PollutionController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PollutionController.prototype, "remove", null);
PollutionController = __decorate([
    common_1.Controller('pollution'),
    __metadata("design:paramtypes", [pollution_service_1.PollutionService])
], PollutionController);
exports.PollutionController = PollutionController;
//# sourceMappingURL=pollution.controller.js.map