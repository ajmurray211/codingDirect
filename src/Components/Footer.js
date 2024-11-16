import logo from '../Assets/logo-2.png'
import icon1 from '../Assets/instagramIcon.png'
import icon2 from '../Assets/tiktokIcon.png'
import icon3 from '../Assets/facebookIcon.png'

const Footer = () => {
    return (
        <div id='footer'>
            <img className='CDlogo' src={logo} />
            <div id='footerCopyright'> ©2024. All Rights Reserved.</div>
            <div id='footerLinksContainer'>
                <a target='_blank' href=''>
                    <img className='footerIcon' src={icon1} />
                </a>
                <a target='_blank' href=''>
                    <img className='footerIcon' src={icon2} />
                </a>
                <a target='_blank' href=''>
                    <img className='footerIcon' src={icon3} />
                </a>
            </div>
        </div>
    );
}

export default Footer;