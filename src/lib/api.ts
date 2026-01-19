const API_URL = 'https://api.mock.com/dragons';

export const fetchDragons = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error fetching dragons');
  return await response.json();
};