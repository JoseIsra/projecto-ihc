import React, { useState, useEffect } from 'react'
import useStyles, { getModalStyle } from './styles';
import {Modal, Button, Typography } from '@material-ui/core'
import { useDataLayerValue } from '../../datalayer/DataLayer';


export const ModalBasket = () => {
    const classes = useStyles();
    const modalStyle = getModalStyle();
    const [open, setOpen] = useState(false);
    const [, dispatch ] = useDataLayerValue();


    const sleep = ()=> {
        return new Promise((resolve) => setTimeout(resolve, 1000))
    }

    

    useEffect(()=>{
        let timeout = setTimeout(()=> {
            setOpen(false);   
        }, 2500);
        
        return () => clearTimeout(timeout);
        
    }, [open])

    

    const handleOpen = async () => {
        setOpen(true);
        await sleep();
        dispatch({type:'CLEAR__BASKET'})
    };
    
    
    const handleClose = () => {
        setOpen(false);
        dispatch({type:'CLEAR__BASKET'})
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Typography variant="body1">Su pedido ha sido registrado,
            espere a que lo llamen
            </Typography>
        </div>
    );

    return (
        <div>
        <Button className={classes.buyButton}   onClick={handleOpen} >
        Realizar compra
        </Button>

        <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
            { body }
        </Modal>
        </div>
    )
}
