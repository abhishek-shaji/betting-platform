'use client';

import React from 'react';

import { Event } from '../../types';
import { BetData, BetModal } from './bet-modal';
import { format } from 'date-fns';

interface EventsListProps {
  events: Event[];
}

const EventsList = ({ events }: EventsListProps) => {
  const [betData, setBetData] = React.useState<BetData | null>(null);

  const handleOnClose = () => {
    setBetData(null);
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        {events.map(({ id, name, startTime, outcomes }) => (
          <div
            className={`grid grid-cols-${outcomes.length} gap-4 rounded border p-2`}
            key={id}
          >
            <div
              className={`flex items-center justify-between text-primary col-span-${outcomes.length} bg-gray-100 p-2 font-bold`}
            >
              <p>
                {name}
              </p>
              <p className="text-gray-500 text-sm">
                {format(new Date(startTime), "MMMM d, yyyy 'at' h:mm a")}
              </p>
            </div>
            {outcomes.map(({ id, name }) => (
              <div className="rounded bg-gray-100 p-2 text-center" key={id}>
                {name}
              </div>
            ))}
            {outcomes.map((outcome) => (
              <button
                className="rounded bg-blue-100 p-2 text-center hover:bg-blue-200"
                key={outcome.id}
                onClick={() =>
                  setBetData({
                    eventName: name,
                    outcome,
                  })
                }
              >
                {outcome.odds}
              </button>
            ))}
          </div>
        ))}
      </div>
      <BetModal data={betData} onClose={handleOnClose} />
    </>
  );
};

export { EventsList };
