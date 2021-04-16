import React from 'react'
import './Main.css';
import { Header, Sidebar , MenuSide} from '../index'
import {Grid, Paper}  from '@material-ui/core';
import useStyles from './styles';
export const Main = () => {
    const  classes = useStyles();
    return (
        <Paper square={false} elevation={0} className={classes.root}>
            <Header />
            <div>
                <Grid container spacing={1} direction="row" 
                justify="center" alignItems="stretch" wrap="wrap" >
                    <Grid item sm={4} md={5}  lg={5} xl={3}>
                    <Sidebar/> 
                    </Grid>
                    <Grid item sm={4} md={6} lg={7} xl={9}>
                    <MenuSide />
                    </Grid>

                </Grid>
            </div>
        </Paper>
    )
}
