import style from './Projects.module.css'
import folderSVG from '../icons/folder.svg'
import { useEffect } from 'react'
import { useState } from 'react'
import lefArrow from '../icons/button-left.svg'


const links = [
    {
        title:"Project1",
        href:"https://aceof21.netlify.app/"
    },
    {
        title:"Project2",
        href:"blabla"
    },
    {
        title:"Project3",
        href:"blabla"
    },
]

const Project = () => {
    const [displayFolder,setDisplayFolder] = useState(true)
    const [displayProjects,setDisplayProjects] = useState('none')
    const [displayFolderPic,setDisplayFolderPic] = useState('block')

    const showProjects = () => {
        setDisplayFolder(prevState => !prevState)
    }

    useEffect(() => {
        if(displayFolder){
            setDisplayFolderPic('block')
            setDisplayProjects('none')
        } else {
            setDisplayFolderPic('none')
            setDisplayProjects('block')
        }
    },[displayFolder])


    return (
            <div className={style.main}>
            <div className={style.bar}>
                <p>Projects</p>
            </div>
            <div>
                <div className={style.projectsFolder} style={{display:displayFolderPic}}>
                <img src={folderSVG} style={{width:'64px'}} onClick={showProjects}/>
                <p>projects</p>
                </div>
                <div className={style.displayedProjects} style={{display:displayProjects}}>
                    <div className={style.barNav}>
                        <div className={style.barLeftNav}>
                    <img src={lefArrow} style={{width:'16px'}} onClick={showProjects}/>
                        </div>
                        <div className={style.barNavigation}>
                    <img src={folderSVG} style={{width:'16px'}} />
                    <p>portfolio/projects</p>
                        </div>
                    </div>
                    <div className={style.links}>
                        {links.map((link,index) => {
                            return (
                                <a key={index} href={link.href} target='_blank'>{link.title}</a>
                            )
                        } )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project