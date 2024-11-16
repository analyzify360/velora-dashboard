import React, {useEffect, useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CopyButton = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);
    useEffect(() => {
        if (isCopied) {
            const timeout = setTimeout(() => {
                setIsCopied(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isCopied]);
    // Copy text function
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <button onClick={copyToClipboard}>
            {isCopied ?
                <i className="fas fa-check" style={{ color: 'green' }}></i> :
                <i className="far fa-copy"></i>
            }
            
        </button>
    );
};

export default CopyButton;