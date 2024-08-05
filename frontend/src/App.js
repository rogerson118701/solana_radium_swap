import React from 'react';
import SwapForm from './components/SwapForm';
import BalanceDisplay from './components/BalanceDisplay';
import TransactionHistory from './components/TransactionHistory';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>Solana Swap</h1>
            <SwapForm />
            <BalanceDisplay />
            <TransactionHistory />
        </div>
    );
}

export default App;