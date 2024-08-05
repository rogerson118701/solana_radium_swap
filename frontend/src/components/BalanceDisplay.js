import React from 'react';

const BalanceDisplay = () => {
    // Dummy balance, you might fetch this from your API
    const balance = 100;

    return (
        <div>
            <h2>Balance: {balance} SOL</h2>
        </div>
    );
};

export default BalanceDisplay;