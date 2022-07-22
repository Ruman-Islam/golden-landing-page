import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <FontAwesomeIcon icon={faComputer} />
        </div>
    );
};

export default Home;