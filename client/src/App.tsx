import React, {useEffect, useState} from 'react'
import CreatePromotions from './components/CreatePromotions'
import ReactVirtualizedTable from "./components/PromotionsTable";
import {createPromotions, getPromotions} from './API'
// TODO: implement delete / edit / duplicate button on virtualized table row
// import {deletePromotion} from './API'

const App: React.FC = () => {
    const [promotions, setPromotions] = useState();
    useEffect(() => {
        fetchPromotions()
    }, []);
    const fetchPromotions = (): void => {
        getPromotions()
            .then(({data: {promotions}}: IPromotion[] | any) => {
                setPromotions(promotions);
            })
            .catch((err: Error) => console.log(err))

    };
    const handleSavePromotions = (e: any): void => {
        e.preventDefault();
        createPromotions()
            .then(({status, data}) => {
                if (status !== 201) {
                    throw new Error('Error! Promotions Not Save')
                }
                setPromotions(data)
            })
            .catch((err: any) => console.log(err))
    };
    // TODO: implement delete / edit / duplicate button on virtualized table row
    // const handleDeletePromotion = (_id: string): void => {
    //     deletePromotion(_id)
    //         .then(({status, data}) => {
    //             if (status !== 200) {
    //                 throw new Error('Error! Todo not deleted')
    //             }
    //             setPromotions(data)
    //         })
    //         .catch((err) => console.log(err))
    // };

    return (
        <main className='App'>
            <h1>Promotions</h1>
            {promotions ? (
                <ReactVirtualizedTable promotions={promotions}>
                </ReactVirtualizedTable>
            ) : (
                <CreatePromotions savePromotions={handleSavePromotions}/>
            )}
        </main>
    )
};

export default App
