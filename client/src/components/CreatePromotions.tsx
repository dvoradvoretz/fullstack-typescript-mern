import React from 'react'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);
type Props = {
    savePromotions: (e: any) => void
}

const CreatePromotions: React.FC<Props> = ({ savePromotions }) => {
    const classes = useStyles();
    return (
        <div>
            <Button
                onClick={(e)=> savePromotions(e)}
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Generate 10000 new Promotions
            </Button>
        </div>
    )
};

export default CreatePromotions
