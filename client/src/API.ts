import axios, {AxiosResponse} from 'axios'

const baseUrl: string = 'http://localhost:4000';

export const getPromotions = async (): Promise<AxiosResponse<ApiPromotionDataType>> => {
    try {
        const promotions: AxiosResponse<ApiPromotionDataType> = await axios.get(
            baseUrl + '/promotions'
        );
        return promotions
    } catch (error) {
        throw new Error(error)
    }
};
export const createPromotions = async (): Promise<AxiosResponse<ApiPromotionDataType>> => {
    try {
        const savePromotions: AxiosResponse<ApiPromotionDataType> = await axios.post(
            baseUrl + '/create-promotions'
        );
        return savePromotions
    } catch (error) {
        throw new Error(error)
    }
};

// TODO: implement delete / edit / duplicate button on virtualized table row
// export const deletePromotion = async (_id: string): Promise<AxiosResponse<ApiPromotionDataType>> => {
//     try {
//         const deletedPromotion: AxiosResponse<ApiPromotionDataType> =
//             await axios.delete(
//                 `${baseUrl}/delete-promotion/${_id}`
//             );
//         return deletedPromotion
//     } catch (error) {
//         throw new Error(error)
//     }
// };
