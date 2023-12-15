// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8018/exercise/braille';

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const updateData = async (endpoint, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

