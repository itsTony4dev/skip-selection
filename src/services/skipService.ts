import axios from 'axios';
import type { Skip } from '../types/skip';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchSkips = async (postcode: string = 'NR32', area: string = 'Lowestoft'): Promise<Skip[]> => {
  const response = await axios.get<Skip[]>(`${API_BASE_URL}/skips/by-location`, {
    params: {
      postcode,
      area
    }
  });
  
  return response.data.filter(skip => !skip.forbidden);
};
