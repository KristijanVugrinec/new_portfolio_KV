import { useEffect, useState } from 'react'
import style from './Info.module.css'
import textSVG from '../icons/textfile.png'

import closeButton from '../icons/close.svg'


const Info = ({showInfo,setShowInfo}) => {

    const display = showInfo ? 'block' : 'none'


    const closeWindow = () => {
        setShowInfo(false)
    }

    return (
        <div className={style.main} style={{display:display}}>
            <div className={style.bar}>
                <div className={style.iconBar}>
                <img src={textSVG} style={{width:'16px'}}/>
                <p>info.txt</p>
                </div>
                <button onClick={closeWindow}><img src={closeButton} /></button>
            </div>
            <div className={style.info}>
                <p><bold>Name:</bold> Kristijan Vugrinec</p>
                <p><bold>Place of Birth:</bold> Varaždin</p>
                <p><bold>Nationality:</bold> Croatian</p>
                <p>Highly motivated with a quick adaptability to new technologies</p>
                <p>Strong communication skills</p>
                <p>Independent, proactive, and focused on professional growth</p>
                <p>In my free time, I enjoy coffee, playing Counter-Strike, and spending time in nature</p>
                <p>Animal lover, especially cows 🐄</p>
                <p>I have a strong passion for sports.</p>
            </div>
        </div>
    )
}

export default Info