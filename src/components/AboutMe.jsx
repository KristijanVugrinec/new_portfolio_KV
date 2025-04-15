import style from './AboutMe.module.css'
import selfie from '../image/me.png'
import CV from '../cv/CV.pdf'
import { useEffect } from 'react'
import { useState } from 'react'
import minimizeButton from '../icons/minimize.svg'

const About = ({onShowInfo}) => {

    const [minimize,setMinimize] = useState(false)
    const [height,setHeight] = useState('250px')
    const [icon,setIcon] = useState(minimizeButton)

    useEffect(() => {
        if(minimize === true){
            setHeight('30px')
            setIcon('+')
        } else {
            setIcon('-')
            setHeight('250px')
        }
    },[minimize])



    const minimizeAboutMe = () => {
        setMinimize(prevState => !prevState)
        console.log("Radi")
        console.log(height)
    }



    return(
        <div className={style.main} style={{height:height}}>
            <div className={style.bar}>
                <p>About Me</p>
                <button onClick={minimizeAboutMe}><img src={minimizeButton}/></button>
            </div>
            <div className={style.aboutMeMain}>
                <div className={style.picture}>
                    <img src={selfie} style={{width:"300px"}}/>
                </div>
                    <div className={style.info}>
                        <p className={style.name}>Hi,I'm Kristijan</p>
                        <p className={style.role}>Frontend Developer</p>
                        <p className={style.infoText} onClick={onShowInfo} style={{cursor:"pointer"}}>info.txt</p>
                        <a href={CV} download='Kristijan Vugrinec CV'>
                        <button className={style.buttonCV}>DOWNLOAD CV</button>
                        </a>
                    </div>
            </div>
        </div>
    )
}


export default About


