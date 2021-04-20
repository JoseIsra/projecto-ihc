
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useDataLayerValue } from '../../datalayer/DataLayer';
import { Container ,Box, Typography} from '@material-ui/core';
import { getAmountOfMoney } from '../../datalayer/reducer';
import { ModalBasket } from '../index';
import useStyles from './styles'

export const Total = () => {
    const [{basket}] = useDataLayerValue();
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <CurrencyFormat  
            renderText ={(value) => (
                <>
                <Typography variant="h6">Total ({basket.length}) productos</Typography>
                <Box >
                <Typography  variant="subtitle2">Monto: <span> <strong>S/.{`${value}`}</strong></span></Typography>
                <ModalBasket />
                </Box>
                </>
            )}
            decimalScale={2}
            value={getAmountOfMoney(basket)}
            displayType={"text"}
            />
        </Container>
    )
}
