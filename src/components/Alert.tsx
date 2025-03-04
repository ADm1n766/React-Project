import React from 'react';

interface AlertProps {
    onButtonClick: () => void; // Prop for Button-Click-Handler
}

const Alert = ({onButtonClick}: AlertProps) => {
    const [showAlert , setShowAlert] = React.useState(false);
    const [message , setMessage] = React.useState('');

    const handleButtonClick = () => {
        setMessage('This Button was clicked!');
        setShowAlert(true);
        onButtonClick();
    };
    return (
        <div style={{margin: '20px'}}>
            {showAlert && (
                <div className="alert alert-warning" role="alert">
                    {message}
                </div>
            )}
            <button
                className="btn btn-primary mt-2"
                onClick={handleButtonClick}
            >
                Show Alert
            </button>
        </div>
    );
};
export default Alert;