import axios from 'axios';

const apiKey = 'c611f6e892abafdbf74f0e2029754c70';
const readAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjExZjZlODkyYWJhZmRiZjc0ZjBlMjAyOTc1NGM3MCIsInN1YiI6IjY2MmQxODc2MDcyMTY2MDEyNDY5MjY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8HSmr7lGooy2Ufr_Li0tiyO4ti6xhsm_imdT4yhqCqQ';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${readAccessToken}`,
  },
  params: {
    api_key: apiKey,
  },
});

export const getActionMovies = async () => {
  const response = await apiClient.get('discover/movie', {
    params: {
      with_genres: 28,
      sort_by: 'popularity.desc',
      page: 1,
    },
  });

  return response.data.results.slice(0, 3);
};

export const getTrendingMovies = async () => {
  const response = await apiClient.get('trending/movie/day');

  return response.data.results.slice(0, 3);
};

export const getUpcomingMovies = async () => {
  const response = await apiClient.get('movie/upcoming');

  return response.data.results.slice(0, 3);
};

export const searchMovies = async (searchTerm) => {
  try {
    const response = await apiClient.get('search/movie', {
      params: {
        query: searchTerm,
        page: 1,
      },
    });
    return response.data.results.slice(0, 3);
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
};