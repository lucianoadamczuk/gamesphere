import { API_BASE, API_KEY } from '@/API';
import { Genres } from '@/types';

export const getGenres = async (): Promise<undefined | Genres[]> => {
	try {
		const data = await fetch(API_BASE + 'genres' + API_KEY);
		if (!data.ok) {
			console.log('Error getting genres');
		}
		const response = await data.json();
		return response.results;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
