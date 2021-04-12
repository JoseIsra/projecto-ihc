import React from 'react'
import './Food.css';


export const Food = ({name, photo, precio}) => {
    return (
        <div className="food">  
        <img src={photo} alt="food "/>
            <p>{name} {precio} </p> 
        </div>
    )
}
