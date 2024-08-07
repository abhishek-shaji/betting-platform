import { client } from '../../fetcher';
import { BettingPanel } from '../../components/betting-panel';

interface SportsBettingPageProps {
  params: {
    sportId: string;
  };
}

async function SportBettingPage({ params }: SportsBettingPageProps) {
  try {
    const { data: sports } = await client.GET('/api/sports');

    const { data: events } = await client.GET('/api/events', {
      params: {
        query: {
          sportId: Number(params.sportId),
        },
      },
    });

    return (
      <div className="mx-auto min-h-screen max-w-4xl py-10">
        {sports && events && <BettingPanel sports={sports} events={events} />}
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-extrabold">An error occured while fetching data. Please try again later</h1>
      </div>
    );
  }
}

export default SportBettingPage;
