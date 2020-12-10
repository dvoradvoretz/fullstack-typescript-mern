import {Response, Request} from 'express'
import {IPromotion} from "../../types/promotion";
import Promotions from '../../models/promotion.js'
import faker from 'faker';

const getPromotions = async (req: Request, res: Response): Promise<void> => {
    try {
        const promotions: IPromotion[] = await Promotions.find();
        res.status(200).json({promotions});
    } catch (error) {
        throw error;
    }
};

const createPromotion = async (req: Request, res: Response): Promise<void> => {
        try {
            let promotionItems: IPromotion[] = [];
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
            await Promotions.insertMany(promotionItems);

            const allPromotions: IPromotion[] = await Promotions.find();
            res.status(201).json({
                message: 'Promotion added',
                promotions: allPromotions
            });
        }
        catch
            (error) {
            throw error;
        }
    }
;

const updatePromotion = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: {id},
            body,
        } = req;
        const updateTodo: IPromotion | null = await Promotions.findByIdAndUpdate(
            {_id: id},
            body
        )
        const allTodos: IPromotion[] = await Promotions.find();
        res.status(200).json({
            message: 'Promotion updated',
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
};

const deletePromotion = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedPromotions: IPromotion | null = await Promotions.findByIdAndRemove(
            req.params.id
        );
        const allPromotions: IPromotion[] = await Promotions.find();
        res.status(200).json({
            message: 'Promotion deleted',
            promotion: deletedPromotions,
            promotions: allPromotions,
        })
    } catch (error) {
        throw error
    }
};

export {getPromotions, createPromotion, updatePromotion, deletePromotion}
