import { client } from '../fetcher';

export const getSportsAndEvents = async (sportId: string) => {
  const { data: sports, error: sportsError } = await client.GET('/api/sports');

  const { data: events, error: eventsError } = await client.GET('/api/events', {
    params: {
      query: {
        sportId: Number(sportId),
      },
    },
  });

  if (sportsError || eventsError) {
    throw new Error('An error occurred while fetching data');
  }

  return { sports, events };
};
