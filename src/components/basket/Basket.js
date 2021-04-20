import React from 'react'
import { Total  } from "../../components";
import { useDataLayerValue } from '../../datalayer/DataLayer';
import useStyles from './styles';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

export const Basket = () => {
    const classes = useStyles();
    const [{ basket }, dispatch] = useDataLayerValue();
    const hideBasket = () => {
        dispatch({
            type: 'SHOW__BASKET',
        })
    }

    const deleteItem = (id) => {
        dispatch({
            type: 'DELETE__ITEM',
            payload: id
        })
    }


    return (
        <div>
            {basket.length > 0 ? (
                <Grid container spacing={0} wrap="wrap" direction="row" justify="space-evenly" className={classes.conta}>
                    <button  className={classes.realbutton} onClick={hideBasket}>Volver al menu de platos</button>
                
                    <Grid item xs={12} sm={5} md={5} lg={7} xl={6} className={classes.grid}>
                
                        {basket.map(item => (
                            <Card className={classes.root} key={item.id}>
                                <CardMedia className={classes.picture}
                                    image={item.photo}
                                    title="menupicture"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography variant="h6"  >{item.name}</Typography>
                                        <Typography variant="caption" display="block"
                                            style={{ lineHeight: '16px' }}
                                            color="textSecondary"  >{item.description}</Typography>
                                        <Typography variant="subtitle2">Precio: S/.{item.precio}</Typography>
                                        <button  onClick={() => deleteItem(item.id)}
                                            className={classes.deleteButton} >Eliminar</button>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={4} xl={4}>
                        <Total />
                    </Grid>
                </Grid>
                
                )
                : (<div>
                    <p>No hay elementos</p>
                    <Button variant="contained" size="small" onClick={hideBasket}>Volver al menu de platos</Button>
                </div>)}

        </div>
    )
}
