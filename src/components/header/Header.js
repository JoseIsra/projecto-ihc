import React from 'react'
import './Header.css'
import { Typography } from '@material-ui/core';
export const Header = () => {
    return (
        <div className="header">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Popeyes_logo.svg/142px-Popeyes_logo.svg.png" alt="logo" />

            <Typography align="center" variant="h5">
                Ordene aquí
            </Typography>

        </div> 
    )
}
