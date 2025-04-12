import { useState } from 'react'
import style  from './Header.module.css'



const Header = ({changeSize}) => {

    const [minimize,setMinimize] = useState('□')
    const [isMinimized,setIsMinimzed] = useState(false)
    
    const changeIcon = () => {
        setIsMinimzed(prevState => {
            const newState = !prevState
            console.log(newState)
            return newState
        })
        if(isMinimized === false){
            setMinimize("□□")
        } else {
            setMinimize("□")
        }
    }


    return (
        <header>
            <div className={style.main}>
                <div>
                    <p>Portfolio</p>
                </div>
                <div>
                    <div>
                        <button>_</button>
                        <button onClick={() =>{changeIcon();changeSize()}}>{minimize}</button>
                        <button>X</button>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header