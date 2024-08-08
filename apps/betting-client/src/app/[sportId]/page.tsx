import { BettingPanel } from '../../components/betting-panel';
import { getSportsAndEvents } from '../../api/events';

interface SportsBettingPageProps {
  params: {
    sportId: string;
  };
}

async function SportBettingPage({ params }: SportsBettingPageProps) {
  const { sports, events } = await getSportsAndEvents(params.sportId);

  return (
    <div className="mx-auto min-h-screen max-w-4xl py-10">
      {sports && events && <BettingPanel sports={sports} events={events} />}
    </div>
  );
}

export default SportBettingPage;
