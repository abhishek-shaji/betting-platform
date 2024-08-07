import { client } from '../../fetcher';
import { BettingPanel } from '../../components/betting-panel';

export default async function Index({ params }) {
  const { data } = await client.GET('/api/sport');

  console.log(params.sportId, 'params.sportId');

  const { data: events } = await client.GET('/api/event', {
    params: {
      query: {
        sportId: params.sportId,
      },
    },
  });

  return (
    <div className="mx-auto min-h-screen max-w-4xl py-10">
      {data && events && <BettingPanel sports={data} events={events} />}
    </div>
  );
}
