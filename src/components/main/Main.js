import React from 'react'
import './Main.css';
import { Header, Sidebar , MenuSide, Basket } from '../index'
import {Grid, Paper}  from '@material-ui/core';
import useStyles from './styles';
import { useDataLayerValue } from '../../datalayer/DataLayer';

export const Main = () => {
    const  classes = useStyles();
    const [{show}] = useDataLayerValue();



    return (
        <Paper square={false} elevation={0} className={classes.root}>
            <Header />
            {show ? (
                    <Basket />
            ):(
                <div>
                <Grid container spacing={1} direction="row" 
                justify="center" alignItems="stretch" wrap="wrap" >
                    <Grid item sm={6} md={5}  lg={5} xl={3}>
                    <Sidebar/> 
                    </Grid>
                    <Grid item sm={6} md={6} lg={7} xl={9}>
                    <MenuSide />
                    </Grid>
                </Grid>
            </div>
            )}

        </Paper>
    )
}
