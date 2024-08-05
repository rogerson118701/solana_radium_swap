import { useState } from 'react';

const useSwap = () => {
    const [loading, setLoading] = useState(false);

    const swap = async (amount) => {
        setLoading(true);
        // Replace this with actual swap logic or API call
        console.log(`Swapping ${amount} SOL...`);
        setTimeout(() => {
            setLoading(false);
            alert(`Swapped ${amount} SOL!`); // Dummy alert
        }, 2000);
    };

    return { swap, loading };
};

export default useSwap;