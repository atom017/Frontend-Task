import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footers">
                    <div className="footergp1">
                        <p>Customer Service</p>
                        <p className='small-text'>Terms & Policy</p>
                        <p className='small-text'>Return Policy</p>
                    </div>
                    <div className="footergp2">
                        <p>Language</p>
                        <p className='small-text'>Myanmar (unicode)</p>
                        <p className='small-text'>English</p>
                    </div>
                    <div className="footergp3">
                        <p>Contact Us</p>
                        <p className='small-text'>No 17B,MyayKha St, Mayangone,
                            6miles, Yangon,Myanmar
                        </p>
                        <p className='small-text'>+959345454345</p>
                    </div>
                </div> 
            </div>
            <div className="copyright">
                All rights reserved.Made with love 
            </div>
        </footer>
    )
}

export default Footer
