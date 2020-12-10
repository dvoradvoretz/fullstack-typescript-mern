var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Promotions from '../../models/promotion.js';
import faker from 'faker';
const getPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield Promotions.find();
        res.status(200).json({ promotions });
    }
    catch (error) {
        throw error;
    }
});
const createPromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let promotionItems = [];
        for (let i = 0; i < 10000; i++) {
            let promotionDoc = new Promotions({
                promotionName: faker.internet.userName(),
                type: faker.random.word(),
                startDate: faker.random.word(),
                endDate: faker.random.word(),
                userGroupName: faker.company.companyName()
            });
            promotionItems.push(promotionDoc);
        }
        yield Promotions.insertMany(promotionItems);
        const allPromotions = yield Promotions.find();
        res.status(201).json({
            message: 'Promotion added',
            promotions: allPromotions
        });
    }
    catch (error) {
        throw error;
    }
});
const updatePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield Promotions.findByIdAndUpdate({ _id: id }, body);
        const allTodos = yield Promotions.find();
        res.status(200).json({
            message: 'Promotion updated',
            todo: updateTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
const deletePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPromotions = yield Promotions.findByIdAndRemove(req.params.id);
        const allPromotions = yield Promotions.find();
        res.status(200).json({
            message: 'Promotion deleted',
            promotion: deletedPromotions,
            promotions: allPromotions,
        });
    }
    catch (error) {
        throw error;
    }
});
export { getPromotions, createPromotion, updatePromotion, deletePromotion };
