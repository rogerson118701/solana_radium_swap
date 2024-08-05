import React from 'react';

const TransactionHistory = () => {
    // Dummy transaction history, replace with fetched data
    const transactions = [
        { id: 1, amount: 1, date: '2021-01-01' },
        { id: 2, amount: 2, date: '2021-01-02' },
    ];

    return (
        <div>
            <h2>Transaction History</h2>
            <ul>
                {transactions.map(tx => (
                    <li key={tx.id}>
                        Swapped {tx.amount} SOL on {tx.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;