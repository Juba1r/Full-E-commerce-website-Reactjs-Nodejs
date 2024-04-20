import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterester_icon from '../Assets/pintester_icon.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
               <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
                </ul> 
                <div className="footer-social-icons">
                    <div className="footer-icons-container">
                        <img src="" alt="" />
                    </div>
                </div>


        </div>
    );
}

export default Footer;