import React from 'react'
import './Sidebar.css'
import { Typography } from '@material-ui/core';
import { awesomeOptions } from '../../utils/options';
import {SidebarOptions } from './SidebarOptions';
export const Sidebar = () => {
    return (
        <div className="sidebar">
        <Typography variant="subtitle1">Opciones </Typography>
        <div className="sidebar__categories">
        {awesomeOptions.map(item => (
            <SidebarOptions key={item.id} title= {item.name} Icon={item.icon}/>
        ))} 
        </div>

        </div>
    )
}
