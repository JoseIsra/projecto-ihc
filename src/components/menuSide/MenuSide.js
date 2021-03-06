import React from 'react'
import { Food } from '../../components'
import useStyles from './style'
import { popeyeFood } from '../../utils/options';
import { useDataLayerValue } from '../../datalayer/DataLayer';
import { awesomeOptions } from '../../utils/options';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Badge, Container,  GridListTile, GridList } from '@material-ui/core';
export const MenuSide = () => {
    const classes = useStyles();
    const [{category, basket},dispatch] = useDataLayerValue();

    const showBasket = ()=>{
        dispatch({
            type:'SHOW__BASKET',
        })
    }   

    return (
        <div className={ classes.root } style={{position:'relative'}} >
            <div className={ classes.info }>
            <p  className={classes.text}>{awesomeOptions[category - 1].name}</p>
            <Badge badgeContent={basket.length} classes={{badge:classes.customBadge}}>
            <button className={classes.button}
            onClick={showBasket}
            ><AssignmentIcon fontSize='large' /></button>
            </Badge>
            </div>
            <Container>
            <GridList className={classes.gridList} cols={2} cellHeight='auto' spacing={0}>
            {popeyeFood.filter((food)=>food.category === category).map(item => (
                <GridListTile key={item.id} cols={1}>
                    <Food  id={item.id} name={item.name} photo={item.photo}
                    precio={item.precio} description={item.description} />
                </GridListTile>                        
                        ))}

                </GridList>
                </Container>
        </div>
    )
}
