import React from 'react'
import { useDataLayerValue } from '../../datalayer/DataLayer'
import './SidebarOptions.css'
export const SidebarOptions = ({id, title , Icon}) => {
    const [,dispatch] = useDataLayerValue()

    const changeCategory =()=>{
        dispatch({
            type:'SELECT_CATEGORY',
            payload:id
        })
    }

    return (
        <div className="sidebar__options" onClick={changeCategory} >
            <Icon  className="optionsIcons"/>
            <p>{title}</p>
        </div>
    )
}
