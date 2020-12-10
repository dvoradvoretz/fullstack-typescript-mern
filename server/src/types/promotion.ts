import { Document } from 'mongoose'

export interface IPromotion extends Document {
    promotionName: string
    type: string
    startDate: string
    endDate: string
    userGroupName: string
}