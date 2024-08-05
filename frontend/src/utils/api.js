import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // Replace with your actual API URL

export const fetchBalances = async () => {
    const response = await axios.get(`${API_URL}/balances`);
    return response.data;
};

export const performSwap = async (amount) => {
    const response = await axios.post(`${API_URL}/swap`, { amount });
    return response.data;
};