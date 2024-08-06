import { Event } from '../entities/event.entity';

const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);

export const events: Partial<Event>[] = [
  {
    id: 1,
    name: 'Premier League: Manchester United vs Liverpool',
    startTime: oneHourFromNow,
    sportId: 1,
  },
  {
    id: 2,
    name: 'La Liga: Real Madrid vs Barcelona',
    startTime: oneHourFromNow,
    sportId: 1,
  },
  {
    id: 3,
    name: 'ICC World Cup: India vs Australia',
    startTime: oneHourFromNow,
    sportId: 2,
  },
  {
    id: 4,
    name: 'Ashes Test: England vs Australia',
    startTime: oneHourFromNow,
    sportId: 2,
  },
  {
    id: 5,
    name: "Wimbledon Men's Final",
    startTime: oneHourFromNow,
    sportId: 3,
  },
  {
    id: 6,
    name: 'US Open: Novak Djokovic vs Rafael Nadal',
    startTime: oneHourFromNow,
    sportId: 3,
  },
  {
    id: 7,
    name: 'Champions League: Bayern Munich vs PSG',
    startTime: oneHourFromNow,
    sportId: 1,
  },
  {
    id: 8,
    name: 'IPL: Mumbai Indians vs Chennai Super Kings',
    startTime: oneHourFromNow,
    sportId: 2,
  },
  {
    id: 9,
    name: "French Open Women's Final",
    startTime: oneHourFromNow,
    sportId: 3,
  },
  {
    id: 10,
    name: 'Serie A: Juventus vs Inter Milan',
    startTime: oneHourFromNow,
    sportId: 1,
  },
];
