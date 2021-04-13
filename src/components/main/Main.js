import React from 'react'
import './Main.css';
import { Header, Sidebar , MenuSide} from '../index'


export const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="main__content">
                    <Sidebar />
                    <MenuSide />
            </div>
        </div>
    )
}
