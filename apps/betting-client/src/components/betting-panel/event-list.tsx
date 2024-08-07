'use client';

import React from 'react';

import { Event } from '../../types';
import { BetData, BetModal } from './bet-modal';

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
        {events.map((event) => (
          <div
            className={`grid grid-cols-${event.outcomes.length} gap-4 rounded border p-2`}
            key={event.id}
          >
            <div
              className={`text-primary col-span-${event.outcomes.length} bg-gray-100 p-2 font-bold`}
            >
              {event.name}
            </div>
            {event.outcomes.map(({ id, name }) => (
              <div className="rounded bg-gray-100 p-2 text-center" key={id}>
                {name}
              </div>
            ))}
            {event.outcomes.map((outcome) => (
              <button
                className="rounded bg-blue-100 p-2 text-center hover:bg-blue-200"
                key={outcome.id}
                onClick={() =>
                  setBetData({
                    eventName: event.name,
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
