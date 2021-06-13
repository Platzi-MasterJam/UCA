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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollutionService = void 0;
const common_1 = require("@nestjs/common");
const token = '706543259e22ed7486aedbe0fc0e15a601ee93cd';
let PollutionService = class PollutionService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    create(createPollutionDto) {
        console.log(createPollutionDto);
        return 'This action adds a new pollution';
    }
    findAll() {
        return `This action returns all pollution`;
    }
    async findOne(city) {
        const query = `https://api.waqi.info/feed/${city}/?token=${token}`;
        const result = await this.httpService.get(query).toPromise();
        return result.data;
    }
    update(id, updatePollutionDto) {
        console.log(updatePollutionDto);
        return `This action updates a #${id} pollution`;
    }
    remove(id) {
        return `This action removes a #${id} pollution`;
    }
};
PollutionService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], PollutionService);
exports.PollutionService = PollutionService;
//# sourceMappingURL=pollution.service.js.map