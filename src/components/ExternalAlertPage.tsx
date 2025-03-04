import React from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const ExternalAlertPage = () => {
    const handleExternalButtonClick = () => {
        console.log('External button clicked.');
    }
    return (
        <div className="mt-5">
            <h2>External Alert Page</h2>
            <Alert onButtonClick={() => console.log('Alert-Button on External Page clicked.')}
            />
            <Link to="/" className="btn btn-secondary mt-3"
                  onClick={handleExternalButtonClick}
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ExternalAlertPage;