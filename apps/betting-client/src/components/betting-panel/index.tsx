'use client';

import cx from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { Event, Sport } from '../../types';
import { EventsList } from './event-list';

interface BettingPanelProps {
  sports: Sport[];
  events: Event[];
}

const BettingPanel = ({ sports, events }: BettingPanelProps) => {
  const { sportId } = useParams();

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-primary mb-4 text-4xl font-bold">
          Sports Betting
        </h2>
        <Link href="/my-bets" className="text-primary hover:text-primary font-semibold">
          Bet History →
        </Link>
      </div>
      <hr className="mb-8" />
      <div className="border-primary my-4 border-b pb-1">
      {sports.map(({ id, name }) => {
          const isSelected = Number(sportId) === id;

          return (
            <Link
              key={id}
              href={`/${id}`}
              className={cx('px-4 py-2 focus:outline-none', {
                'bg-primary text-white': isSelected,
                'text-gray-600 hover:bg-gray-100': !isSelected,
              })}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <EventsList events={events} />
    </div>
  );
};

export { BettingPanel };
