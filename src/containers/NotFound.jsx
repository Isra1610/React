import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <>
        <h1 className="ntf">Not Found</h1>
        <Link to="/" className="bHome">
            Go back to home
        </Link>
    </>
);

export default NotFound;