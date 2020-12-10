interface IPromotion {
    promotionName: string
    type: string
    startDate: string
    endDate: string
    userGroupName: string
    id: string
    _id: String
    __v: number
}

type PromotionProps = {
    promotion: IPromotion
}

type ApiPromotionDataType = {
    message: string
    status: string
    promotions: IPromotion[]
    promotion?: IPromotion
}



