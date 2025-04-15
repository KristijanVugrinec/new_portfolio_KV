import style from './Skills.module.css'
import JSLogo from '../icons/JSLogo.png'
import HTMLLogo from '../icons/HTML.png'
import CSSLogo from '../icons/CSS.png'
import GITLogo from '../icons/GIT.png'
import REACTLogo from '../icons/REACT.png'


const Skills = () => {
    return (
        <div className={style.main}>
            <div className={style.bar}>
                <p>Skills</p>
            </div>
            <div className={style.skills}>
                <img src={JSLogo} style={{width:'72px'}} />
                <img src={HTMLLogo} style={{width:'72px'}} />
                <img src={CSSLogo} style={{width:'72px'}} />
                <img src={GITLogo} style={{width:'72px'}} />
                <img src={REACTLogo} style={{width:'72px'}} />
            </div>
        </div>
    )
}

export default Skills