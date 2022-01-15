import React from 'react'
import appleLogo from '../../assets/logos/apple-logo.svg';
import samsungLogo from '../../assets/logos/samsung.svg';
import googleLogo from '../../assets/logos/GoogleLogo.svg';
import oneplusLogo from '../../assets/logos/oneplus.svg';
import realmeLogo from '../../assets/logos/realme.png';
import xiaomiLogo from '../../assets/logos/xiaomi.svg';
import huaweiLogo from '../../assets/logos/Huawei.svg';

import './Brands.css';

const Brands = () => {
    return (
        <div className='wrapper'>
            <h3 className='section-title'>View By Brands</h3>
            <div className="brands">
                <div className="brand brand1">
                    <img src={appleLogo} alt="" />
                </div>  
                <div className="brand brand1">
                    <img src={samsungLogo} alt="" />
                </div>
                <div className="brand brand1">
                    <img src={googleLogo} alt="" />
                </div>
                <div className="brand brand1">
                    <img src={oneplusLogo} alt="" />
                </div>
                <div className="brand brand1">
                    <img src={xiaomiLogo} alt="" />
                </div>
                <div className="brand brand1">
                    <img src={realmeLogo} alt="" />
                </div>
                <div className="brand brand1">
                    <img src={huaweiLogo} alt="" />
                </div>
                <p className='no-margin small-text view'>View All</p> 
            </div>
             
        </div>
    )
}

export default Brands
