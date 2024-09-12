import axios from 'axios';

const BASE_URL = 'https://test.create.diagnal.com';

export const fetchData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/page${page}.json`);
    return response.data.page['content-items'].content;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};