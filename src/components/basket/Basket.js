import React from 'react'
import { Total } from "../../components";
import { useDataLayerValue } from '../../datalayer/DataLayer';
import useStyles from './styles';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

export const Basket = () => {
    const [{ basket }, dispatch] = useDataLayerValue();
    const classes = useStyles();
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
                    <Button variant="contained" size="small" className={classes.button} onClick={hideBasket}>Volver al menu de platos</Button>
                
                    <Grid item xs={12} sm={6} md={7} lg={5} className={classes.grid}>
                
                        {basket.map(item => (
                            <Card className={classes.root} key={item.id}>
                                <CardMedia className={classes.picture}
                                    image={item.photo}
                                    title="menupicture"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h6"  >{item.name}</Typography>
                                        <Typography variant="caption" display="block"
                                            style={{ padding: '0', margin: '0', lineHeight: '16px' }}
                                            color="textSecondary"  >{item.description}</Typography>
                                        <Typography variant="caption">Precio: S/.{item.precio}</Typography>
                                        <Button variant="contained" onClick={() => deleteItem(item.id)}
                                            size="small" className={classes.deleteButton} >Eliminar</Button>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
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