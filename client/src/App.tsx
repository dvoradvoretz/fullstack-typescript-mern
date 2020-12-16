import React, {useEffect, useState} from 'react'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CreatePromotions from './components/CreatePromotions'
import ReactVirtualizedTable from "./components/PromotionsTable";
import {createPromotions, getPromotions} from './API'



// TODO: implement delete / edit / duplicate button on virtualized table row
// import {deletePromotion} from './API'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);
const App: React.FC = () => {
    const classes = useStyles();
    const [promotions, setPromotions ] = useState();
    const [loading, isLoading ] = useState(true);
    useEffect(() => {
        fetchPromotions()
    }, []);
    const fetchPromotions = (): void => {
        getPromotions()
            .then(({data: {promotions}}: IPromotion[] | any) => {
                setPromotions(promotions);
                promotions.length ?  isLoading(true) :  isLoading(false);
            })
            .catch((err: Error) => {
                console.log(err);
                isLoading(false)
            })
    };
    const handleSavePromotions = (e: any): void => {
        isLoading(true);
        e.preventDefault();
        createPromotions()
            .then(({status, data}) => {
                if (status !== 201) {
                    throw new Error('Error! Promotions Not Save')
                }
                setPromotions(data);
                fetchPromotions();
            })
            .catch((err: any) => {
                console.log(err);
            })
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
            {promotions && promotions.length ? (
                <ReactVirtualizedTable promotions={promotions}>
                </ReactVirtualizedTable>
            ) : !loading ?
                    <CreatePromotions savePromotions={handleSavePromotions}/>  :
                <div className={classes.root}>
                    <LinearProgress/>
                    <LinearProgress color="secondary"/>
                    <h2>Loading...</h2>
                </div>}
        </main>
    )
};

export default App