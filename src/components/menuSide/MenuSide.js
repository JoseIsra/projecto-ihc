import React from 'react'
import { Food } from '../../components'
import useStyles from './style'
import { popeyeFood } from '../../utils/options';
import { GridListTile, GridList} from '@material-ui/core';
import { useDataLayerValue } from '../../datalayer/DataLayer';
import { awesomeOptions } from '../../utils/options';
export const MenuSide = () => {
    const classes = useStyles();
    const [{category}] = useDataLayerValue();
    return (
        <div className={ classes.root } >
            <p  className={classes.text}>{awesomeOptions[category - 1].name}</p>
            <GridList className={classes.gridList} cols={2} cellHeight='auto' spacing={1}>
            {popeyeFood.filter((food)=>food.category === category).map(item => (
                <GridListTile key={item.id} cols={0}>
                    <Food  name={item.name} photo={item.photo} precio={item.precio} />
                </GridListTile>                        
                        ))}

                </GridList>
        </div>
    )
}
