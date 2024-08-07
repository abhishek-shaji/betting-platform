import { Outcome } from '../entities/outcome.entity';

export const outcomes: Partial<Outcome>[] = [
  // Event 1: Premier League: Manchester United vs Liverpool
  { id: 1, name: 'Manchester United Win', odds: 2.5, eventId: 1 },
  { id: 2, name: 'Liverpool Win', odds: 2.1, eventId: 1 },
  { id: 3, name: 'Draw', odds: 3.2, eventId: 1 },

  // Event 2: La Liga: Real Madrid vs Barcelona
  { id: 4, name: 'Real Madrid Win', odds: 2.2, eventId: 2 },
  { id: 5, name: 'Barcelona Win', odds: 2.4, eventId: 2 },
  { id: 6, name: 'Draw', odds: 3.0, eventId: 2 },

  // Event 3: ICC World Cup: India vs Australia
  { id: 7, name: 'India Win', odds: 1.9, eventId: 3 },
  { id: 8, name: 'Australia Win', odds: 2.0, eventId: 3 },

  // Event 4: Ashes Test: England vs Australia
  { id: 9, name: 'England Win', odds: 2.1, eventId: 4 },
  { id: 10, name: 'Australia Win', odds: 1.9, eventId: 4 },

  // Event 5: Wimbledon Men's Final
  { id: 11, name: 'Player 1 Win', odds: 1.8, eventId: 5 },
  { id: 12, name: 'Player 2 Win', odds: 2.2, eventId: 5 },

  // Event 6: US Open: Novak Djokovic vs Rafael Nadal
  { id: 13, name: 'Novak Djokovic Win', odds: 1.7, eventId: 6 },
  { id: 14, name: 'Rafael Nadal Win', odds: 2.3, eventId: 6 },

  // Event 7: Champions League: Bayern Munich vs PSG
  { id: 15, name: 'Bayern Munich Win', odds: 1.9, eventId: 7 },
  { id: 16, name: 'PSG Win', odds: 2.1, eventId: 7 },
  { id: 17, name: 'Draw', odds: 3.5, eventId: 7 },

  // Event 8: IPL: Mumbai Indians vs Chennai Super Kings
  { id: 18, name: 'Mumbai Indians Win', odds: 1.8, eventId: 8 },
  { id: 19, name: 'Chennai Super Kings Win', odds: 2.0, eventId: 8 },

  // Event 9: French Open Women's Final
  { id: 20, name: 'Player 1 Win', odds: 1.9, eventId: 9 },
  { id: 21, name: 'Player 2 Win', odds: 2.1, eventId: 9 },

  // Event 10: Serie A: Juventus vs Inter Milan
  { id: 22, name: 'Juventus Win', odds: 2.0, eventId: 10 },
  { id: 23, name: 'Inter Milan Win', odds: 2.2, eventId: 10 },
  { id: 24, name: 'Draw', odds: 3.1, eventId: 10 },
];
