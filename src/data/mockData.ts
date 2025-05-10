import {
  Game,
  Tournament,
  TelecomWallet,
  User,
  Transaction,
  NotificationType,
} from '../types';

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'PUBG Mobile',
    image: 'https://images.pexels.com/photos/7862657/pexels-photo-7862657.jpeg',
    description: 'Battle Royale action with players across Samoa and the Pacific',
    minBet: 5,
    maxBet: 100,
    players: 4,
  },
  {
    id: '2',
    title: 'Speed Chess',
    image: 'https://images.pexels.com/photos/5377841/pexels-photo-5377841.jpeg',
    description: 'Test your strategic thinking in fast-paced chess matches',
    minBet: 2,
    maxBet: 50,
    players: 2,
  },
  {
    id: '3',
    title: 'Poker Tournament',
    image: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg',
    description: 'Compete in Texas Hold’em tournaments with players around the region',
    minBet: 10,
    maxBet: 200,
    players: 6,
  },
  {
    id: '4',
    title: 'Mobile Legends',
    image: 'https://images.pexels.com/photos/7862505/pexels-photo-7862505.jpeg',
    description: 'Team up with fellow Samoan players in 5v5 MOBA battles',
    minBet: 5,
    maxBet: 100,
    players: 2,
  },
];

export const mockTelecomWallets: TelecomWallet[] = [
  {
    provider: 'Digicel mWallet',
    logo: 'https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg',
    id: 'digicel',
  },
  {
    provider: 'Vodafone M-PAiSA',
    logo: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg',
    id: 'vodafone',
  },
  {
    provider: 'BlueSky KlickPay',
    logo: 'https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg',
    id: 'bluesky',
  },
];

export const mockUser: User = {
  id: '1',
  username: 'SamoaGamer99',
  avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  wallet: {
    balance: 150,
    transactions: [
      {
        id: 't1',
        amount: 50,
        type: 'deposit',
        status: 'completed',
        timestamp: '2025-03-15T14:30:00Z',
        description: 'Deposit via Digicel mWallet',
      },
      {
        id: 't2',
        amount: 20,
        type: 'bet',
        status: 'completed',
        timestamp: '2025-03-16T09:15:00Z',
        description: 'PUBG Mobile match entry',
      },
      {
        id: 't3',
        amount: 40,
        type: 'winnings',
        status: 'completed',
        timestamp: '2025-03-16T10:30:00Z',
        description: 'Won PUBG Mobile match',
      },
      {
        id: 't4',
        amount: 30,
        type: 'tournament-entry',
        status: 'completed',
        timestamp: '2025-03-18T16:45:00Z',
        description: 'Entry fee for Samoa Gaming Championship',
      },
    ],
  },
  stats: {
    wins: 15,
    losses: 7,
    tournamentWins: 2,
  },
};

export const mockTournaments: Tournament[] = [
  {
    id: 't1',
    title: 'Samoa PUBG Championship',
    game: mockGames[0],
    entryFee: 30,
    prizePool: 2000,
    startDate: '2025-05-01T18:00:00Z',
    endDate: '2025-05-03T22:00:00Z',
    maxPlayers: 64,
    currentPlayers: 42,
    status: 'upcoming',
    brackets: [],
  },
  {
    id: 't2',
    title: 'Pacific Chess Masters',
    game: mockGames[1],
    entryFee: 15,
    prizePool: 500,
    startDate: '2025-04-25T19:00:00Z',
    endDate: '2025-04-27T21:00:00Z',
    maxPlayers: 16,
    currentPlayers: 16,
    status: 'in-progress',
    brackets: [],
  },
  {
    id: 't3',
    title: 'Apia Poker Series',
    game: mockGames[2],
    entryFee: 50,
    prizePool: 2500,
    startDate: '2025-05-10T17:00:00Z',
    endDate: '2025-05-12T23:00:00Z',
    maxPlayers: 64,
    currentPlayers: 32,
    status: 'upcoming',
    brackets: [],
  },
];

export const mockNotifications: NotificationType[] = [
  {
    id: 'n1',
    type: 'challenge',
    read: false,
    message: 'TuiGamer has challenged you to a PUBG Mobile match for $20',
    timestamp: '2025-04-20T15:30:00Z',
    actionUrl: '/challenges/c1',
  },
  {
    id: 'n2',
    type: 'tournament',
    read: false,
    message: 'The Samoa PUBG Championship starts in 2 hours',
    timestamp: '2025-05-01T16:00:00Z',
    actionUrl: '/tournaments/t1',
  },
  {
    id: 'n3',
    type: 'payout',
    read: true,
    message: 'Your withdrawal of $40 to Digicel mWallet has been processed',
    timestamp: '2025-04-19T11:45:00Z',
  },
];
