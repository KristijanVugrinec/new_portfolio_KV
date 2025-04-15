import { useState } from 'react'
import style  from './Header.module.css'


import closeButton from '../icons/close.svg'
import minimizeButton from '../icons/minimize.svg'




const Header = ({changeSize,onClose,minimizeIcon,changeIcon}) => {

    return (
        <header>
            <div className={style.main}>
                <div>
                    <p>Portfolio</p>
                </div>
                <div>
                    <div className={style.mobile}>
                        {/* <button><img src={minimizeButton}/></button> */}
                        <button onClick={() =>{changeIcon();changeSize()}}><img src={minimizeIcon}/></button>
                        <button onClick={onClose}><img src={closeButton} /></button>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header