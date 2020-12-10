import { IPromotion } from './../types/promotion.js';
import pkg from 'mongoose';
const { model, Schema } = pkg;

const promotionSchema = new Schema({
    promotionName: {
        type: String,
        required: false
    },

    type: {
        type: String,
        required: false
    },

    startDate: {
        type: String,
        required: false
    },

    endDate: {
        type: String,
        required: false
    },

    userGroupName: {
        type: String,
        required: false
    },
});

promotionSchema.set('toObject', {
    transform: function (doc:any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
export default model<IPromotion>('Promotions', promotionSchema);