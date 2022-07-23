import React, { useContext } from 'react';
import { useBackground } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import Navbar from './Navbar';

const Header = () => {
    const {background} = useContext(useBackground);

    return (
        <header id='header' className={`header ${background?'background1':'background2'}`}>
            {/* <Navbar /> */}
            <div className='overlay'>
                <div className='header-content'>
                    <div className='header-content-left'>
                        <h1>Asia</h1>
                        <p>Asia is a continent so full of intrigue, adventure, solace and spirituality that it has fixated and confounded travellers for countries.</p>
                        <button>
                            <span>Explore</span>
                            <FontAwesomeIcon icon={faArrowRightLong}/>
                        </button>
                    </div>
                    <div className='header-content-right'>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;