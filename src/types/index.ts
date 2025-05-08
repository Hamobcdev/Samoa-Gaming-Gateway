export interface User {
    id: string;
    username: string;
    avatar: string;
    wallet: {
      balance: number;
      transactions: Transaction[];
    };
    stats: {
      wins: number;
      losses: number;
      tournamentWins: number;
    };
  }
  
  export interface Transaction {
    id: string;
    amount: number;
    type: 'deposit' | 'withdrawal' | 'winnings' | 'bet' | 'tournament-entry';
    status: 'pending' | 'completed' | 'failed';
    timestamp: string;
    description: string;
  }
  
  export interface Game {
    id: string;
    title: string;
    image: string;
    description: string;
    minBet: number;
    maxBet: number;
    players: number;
  }
  
  export interface Tournament {
    id: string;
    title: string;
    game: Game;
    entryFee: number;
    prizePool: number;
    startDate: string;
    endDate: string;
    maxPlayers: number;
    currentPlayers: number;
    status: 'upcoming' | 'in-progress' | 'completed';
    brackets: TournamentBracket[];
  }
  
  export interface TournamentBracket {
    round: number;
    matches: Match[];
  }
  
  export interface Match {
    id: string;
    player1: User | null;
    player2: User | null;
    winner: User | null;
    status: 'scheduled' | 'in-progress' | 'completed';
    startTime: string;
    betAmount?: number;
  }
  
  export interface TelecomWallet {
    provider: string;
    logo: string;
    id: string;
  }
  
  export interface NotificationType {
    id: string;
    type: 'challenge' | 'tournament' | 'payout' | 'system';
    read: boolean;
    message: string;
    timestamp: string;
    actionUrl?: string;
  }