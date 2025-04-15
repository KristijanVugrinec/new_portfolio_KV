import style from './Footer.module.css'
import microsoftEdge from '../icons/microsoftedge.png'
import startIcon from '../icons/windows98start.png'
const Taskbar = ({onRestore,isHidden}) => {
    return (
        <footer className={style.taskbar}>
            <div className={style.taskbarMain}>
                <div className={style.start}>
                    <img src={startIcon} />
                    Start
                </div>
                <div className={style.activeWindow} onClick={onRestore} style={{backgroundColor: !isHidden ? '#ffff' : 'transparent'}}>
                    <img src={microsoftEdge} />
                </div>
            </div>
        </footer>
    )
}


export default Taskbar