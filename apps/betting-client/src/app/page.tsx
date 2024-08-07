import { redirect } from 'next/navigation';

import { client } from '../fetcher';

export default async function Index() {
  const { data } = await client.GET('/api/sport', {
    cache: 'force-cache',
  });

  if (data && data[0]) {
    return redirect(`/${data[0].id}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-extrabold">No data available</h1>
    </div>
  );
}
