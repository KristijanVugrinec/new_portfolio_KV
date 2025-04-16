import style from './SocialMedia.module.css'
import InstLogo from '../icons/instagram.png'
import GitHubLogo from '../icons/github.png'
import LinkedInLogo from '../icons/linkedin.png'

const links = [
    {
        title:'instagram',
        img: InstLogo,
        link: 'https://www.instagram.com/kristijan.vugrinec/'
    },
    {
        title:'github',
        img: GitHubLogo,
        link: 'https://github.com/KristijanVugrinec'
    },
    {
        title:'linkedin',
        img: LinkedInLogo,
        link: 'https://www.linkedin.com/in/kristijan-vugrinec-6ba614323/'
    }
]



const SocialsMedia = () => {
   return (
    <div className={style.main}>
            <div className={style.bar}>
                <p>Social Media</p>
            </div>
            <div className={style.socials}>
            {links.map((link,index) => {
                return (
                    <div key={index} style={{display:'flex',flexDirection:'row', gap:'10%',marginBottom:'5%', marginLeft:'5%'}}>
                        <a href={link.link} target='_blank'><p style={{margin:'0', color:'#010081'}}>{link.title}</p></a>
                        <img src={link.img} style={{width:'32px'}} />
                    </div>
                )
            })}
            </div>
    </div>
   )
}


export default SocialsMedia