import React, { useState } from 'react';
import bannerImage from './img/banner.png';
import './style.css';

const Banner = () => {
    const [getClose, setClose] = useState('activeBanner')
    const [getDisplay, setDisplay] = useState('block')

    const closeBanner = () => {
        setClose('closeBanner')

        setTimeout(() => {
            setDisplay('none')
        }, 1900);
    }

    return (
        <div id='popupBannerWrapper' style={{ display: getDisplay }} className={getClose}>
            <div onClick={closeBanner} className='bgshadow'></div>
            <div className='bannerWrap'>
                <div className='popupBanner'>
                    <span onClick={closeBanner}>X</span>
                    <img src={bannerImage} />
                </div>
            </div>
        </div>
    );
};

export default Banner;