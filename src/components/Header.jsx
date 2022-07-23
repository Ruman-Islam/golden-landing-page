import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import bg1 from '../assets/images/2057352.jpg';
import bg2 from '../assets/images/fbby1h_1.webp';
import sp1 from '../assets/images/sp1.jpg';
import sp2 from '../assets/images/sp3.jpg';
import sp3 from '../assets/images/sp3.webp';
import sp4 from '../assets/images/sp4.jpg';
import sp5 from '../assets/images/sp5.jpg';
import sp6 from '../assets/images/sp6.jpg';

const photos = [
{img: bg1, sp: [sp1, sp2, sp3], color: 'hill', name: 'Asia'},
{img: bg2, sp: [sp4, sp5, sp6], color: 'desert', name: 'Arabia'},
];

const Header = () => {
const [photoIndex, setPhotoIndex] = useState(0);
const [flip, setFlip] = useState(true);

const nextSlide = () => {
setPhotoIndex(photoIndex === photos.length - 1 ? 0 : photoIndex + 1);
setFlip(!flip)
}

const prevSlide = () => {
setPhotoIndex(photoIndex === 0 ? photos.length - 1 : photoIndex - 1);
setFlip(!flip)
}

return (
<header id='header' className='header' style={{backgroundImage: `url(${photos[photoIndex].img})`}}>
    <div className='overlay'>
        <div className='header-content'>
            <div className='header-content-left'>
                <h1>{photos[photoIndex].name}</h1>
                <p>Asia is a continent so full of intrigue, adventure, solace and spirituality that it has fixated and confounded travellers for countries.</p>
                <button className={`${photos[photoIndex].color}`}>
                    <span>Explore</span>
                    <FontAwesomeIcon icon={faArrowRightLong}/>
                </button>
            </div>
            <div className='header-content-right'>
                <div className='flip-container'>
                    {
                        photos[photoIndex].sp.map((sp, index) => 
                            <div className={`flip-card ${flip? 'flip1' : 'flip2'}`}>
                                <h3>Manali</h3>
                                <img style={{width: `${index === 0 ? '350px' : '300px'}`,
                                height: `${index === 0 ? '600px' : '500px'}`}} src={sp} alt="" />
                            </div>
                            )
                    }
                </div>
                <br />
                <div>
                    <button onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <div className='blur'></div>
                    </button>
                    <button onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                        <div className='blur'></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
);
};

export default Header;