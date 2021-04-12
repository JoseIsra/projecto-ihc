import React from 'react'
import './SidebarOptions.css'
export const SidebarOptions = ({title , Icon}) => {
    return (
        <div className="sidebar__options">
            <Icon  className="optionsIcons"/>
            <p>{title}</p>
        </div>
    )
}
