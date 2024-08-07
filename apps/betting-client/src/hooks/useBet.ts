'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { client } from '../fetcher';

export const useBet = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const placeBet = async (outcomeId: number, amount: number) => {
    setLoading(true);
    setError(null);

    const { data, error } = await client.POST('/api/bet/{outcomeId}', {
      params: {
        path: {
          outcomeId,
        },
      },
      body: {
        amount,
      },
    });

    if (error) {
      setLoading(false);
      setError(`An error occurred while placing the bet: ${error.message}`);

      return;
    }

    return router.push('/my-bets');
  };

  return {
    loading,
    error,
    placeBet,
  };
};
