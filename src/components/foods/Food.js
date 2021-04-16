import React from 'react'
import { useDataLayerValue } from '../../datalayer/DataLayer';
import './Food.css';


export const Food = ({id, name, photo, precio}) => {
    const [,dispatch] = useDataLayerValue();
    const addProduct = () => {
            dispatch({
                type:'ADD_ITEM',
                payload: {
                    id,
                    name,
                    photo,
                    precio
                }
            })
    };

    return (
        <div className="food">  
        <img src={photo} alt="food "/>
            <p>{name} {precio} </p> 
            <button onClick={addProduct}>Escoger</button>
        </div>
    )
}
