import React, { useState } from 'react';
import { performSwap } from '../utils/api';

const SwapForm = () => {
    const [tokenA, setTokenA] = useState('');
    const [tokenB, setTokenB] = useState('');
    const [amount, setAmount] = useState('');

    const handleSwap = async (e) => {
        e.preventDefault();
        try {
            const result = await performSwap(tokenA, tokenB, parseFloat(amount));
            alert(`Swap executed! New Transaction ID: ${result.transactionId}`);
            // Optionally, refresh balances or do something with the result
        } catch (error) {
            console.error('Error during swap:', error);
            alert('Failed to execute swap.');
        }
    };

    return (
        <form onSubmit={handleSwap}>
            <h2>Swap Tokens</h2>
            <input
                type="text"
                placeholder="Token A"
                value={tokenA}
                onChange={(e) => setTokenA(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Token B"
                value={tokenB}
                onChange={(e) => setTokenB(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Swap</button>
        </form>
    );
};

export default SwapForm;