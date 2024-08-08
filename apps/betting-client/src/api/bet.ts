import { client } from '../fetcher';

export const getMyBets = async () => {
  const { data, error } = await client.GET('/api/bets', {
    cache: 'no-cache',
  });

  if (error) {
    throw new Error('An error occurred while fetching data');
  }

  return data;
};
