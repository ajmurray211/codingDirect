import logo from '../Assets/logo-2.png'

const Footer = () => {
    return (
        <div id='footer'>
            <img className='CDlogo' src={logo} />
            <div> ©2024. All Rights Reserved.</div>
            <div>
                <img/>
                <img/>
                <img/>
            </div>
        </div>
    );
}

export default Footer;