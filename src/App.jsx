import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { useEffect } from 'react'
import About from './components/AboutMe'
import Project from './components/Projects'

function App() {

  const [mainSize,setMainSize] = useState('1600px')
  const [marginTop,setMargintTop] = useState('100px')
  const [marginBottom,setMarginBottom] = useState('100px')
  const [isFullScreen,setIsFullScreen] = useState(false)

  const changeFullScren = () => {
    setIsFullScreen(prevState => !prevState)
  }


  useEffect(() => {
    if(isFullScreen){
      setMargintTop('0')
      setMarginBottom('0')
      setMainSize('99.5vw')
    } else {
      setMainSize('1600px')
      setMargintTop('100px')
      setMarginBottom('100px')
    }
  },[isFullScreen])

  const changeMainSize = () => {
    changeFullScren()
    console.log("Radi")
  }

  return (
    <main style={{width: mainSize,marginTop:marginTop,marginBottom:marginBottom}}>
    <Header changeSize={changeMainSize} />
      <h1>portfolio</h1>
      <div style={{display:"flex",width:"70%",flexDirection:"row", gap:"10%"}}>
      <About/>
      <Project />
      </div>
    </main>
  )
}

export default App
