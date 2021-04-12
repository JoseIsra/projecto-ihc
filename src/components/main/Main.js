import React from 'react'
import './Main.css';
import { Header, Sidebar , Food} from '../index'
import { popeyeFood } from '../../utils/options';

export const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="main__content">
                <div className="left__content">
                    <Sidebar />
                </div>
                <div className="right__content">
                    {popeyeFood.map(item => (
                            <Food key={item.id} name={item.name} photo={item.photo} precio={item.precio} />
                        
                    ))}
                </div>
            </div>
        </div>
    )
}
