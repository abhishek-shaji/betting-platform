import { client } from '../../fetcher';

async function MyBetsPage() {
  try {
    const { data } = await client.GET('/api/bets', {
      cache: 'no-cache',
    });

    if(!data || !data.length) {
      return (
        <div className="text-gray-600 text-xl min-h-screen flex items-center justify-center">
          You have not placed any bets yet.
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white py-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Bets History</h1>
          <hr className="mb-8" />
          <div className="space-y-6">
            {data.map(({ id, event, outcome, amount }) => (
              <div key={id} className="bg-white rounded-lg p-6 transition duration-300 border border-gray-200">
                <h2 className="text-2xl font-extrabold text-primary mb-2">{event?.name}</h2>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-gray-700">Outcome: <strong>{outcome.name}</strong></p>
                  <p className="text-lg font-semibold text-green-600">Odds: {outcome.odds}</p>
                </div>
                <p className="text-md text-gray-600 mt-2">Amount: ${amount}</p>
                <p className="text-md text-gray-600">Potential Win: ${(amount * outcome.odds).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-extrabold text-red-600">
          An error occurred while fetching the data
        </h1>
      </div>
    );
  }
}

export default MyBetsPage;
