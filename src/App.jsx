import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { useEffect } from 'react'
import About from './components/AboutMe'
import Project from './components/Projects'
import Info from './components/Info'
import { useDragControls } from 'framer-motion'
import { motion } from 'framer-motion'
import Skills from './components/Skills'
import SocialsMedia from './components/SocialMedia'
import Taskbar from './components/Footer'
import style from './components/App.module.css'

import maximizeButton from './icons/maximize.svg'
import maximizeRestore from './icons/restore.svg'



function App() {

  const [mainSize,setMainSize] = useState('1600px')
  const [marginTop,setMargintTop] = useState('100px')
  const [marginBottom,setMarginBottom] = useState('100px')
  const [isFullScreen,setIsFullScreen] = useState(false)
  const [heightSize,setHeightSize] = useState('auto')

  const [showInfo,setShowInfo] = useState(false)


  const [hideContent,setHideContent] = useState(false)

  const changeFullScren = () => {
    setIsFullScreen(prevState => !prevState)
  }


  useEffect(() => {
    if(isFullScreen){
      setMargintTop('0')
      setMarginBottom('0')
      setMainSize('99.5vw')
      setHeightSize('96vh')
    } else {
      setHeightSize('auto')
      setMainSize('1600px')
      setMargintTop('100px')
      setMarginBottom('100px')
    }
  },[isFullScreen])

  const changeMainSize = () => {
    changeFullScren()
    console.log("Radi")
  }

  const controls = useDragControls()

  const [minimize,setMinimize] = useState(maximizeButton)
  const [isMinimized,setIsMinimzed] = useState(false)
  
  const changeIcon = () => {
      setIsMinimzed(prevState => {
          const newState = !prevState
          console.log(newState)
          return newState
      })
      if(isMinimized === false){
          setMinimize(maximizeRestore)
      } else {
          setMinimize(maximizeButton)
      }
  }


  return (
    <main style={{width: mainSize,height:heightSize,marginTop:marginTop,marginBottom:marginBottom,border: hideContent ? 'none' : undefined}}>
      {!hideContent && (
      <>
        <motion.div drag dragControls={controls} dragMomentum={false} style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} dragConstraints={{ top: -300, left: -300, bottom: 300, right: 300 }}>
          <Info showInfo={showInfo} setShowInfo={setShowInfo} />
        </motion.div>

        <Header changeSize={changeMainSize} onClose={() => setHideContent(true)} changeIcon={changeIcon} minimizeIcon={minimize}/>

        <h1>portfolio</h1>

        <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "10%" }}>
          <div style={{ display: "flex", width: "100%", flexDirection: "row", gap: "10%", justifyContent: "center"}} className={style.mobileAbout}>
            <About onShowInfo={() => setShowInfo(true)} />
            <Project />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            gap: '10%'
          }} className={style.mobileSkills}>
            <Skills />
            <SocialsMedia />
          </div>
        </div>
      </>
    )}
      <Taskbar onRestore={() => setHideContent(false)}  isHidden={hideContent}/>
    </main>
  )
}

export default App
