import React from 'react';
import { Tournament } from '../../types';
import Card, { CardBody, CardFooter } from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { Trophy, Users, Calendar, DollarSign } from 'lucide-react';

interface TournamentCardProps {
  tournament: Tournament;
  onJoin: (tournamentId: string) => void;
  onView: (tournamentId: string) => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ 
  tournament, 
  onJoin, 
  onView 
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="info" rounded>Upcoming</Badge>;
      case 'in-progress':
        return <Badge variant="warning" rounded>In Progress</Badge>;
      case 'completed':
        return <Badge variant="success" rounded>Completed</Badge>;
      default:
        return null;
    }
  };

  const isJoinable = tournament.status === 'upcoming' && tournament.currentPlayers < tournament.maxPlayers;

  return (
    <Card bordered hoverEffect className="h-full flex flex-col">
      <div 
        className="h-40 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${tournament.game.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute top-3 right-3">
          {getStatusBadge(tournament.status)}
        </div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{tournament.title}</h3>
          <p className="text-gray-300 text-sm">{tournament.game.title}</p>
        </div>
      </div>
      
      <CardBody className="flex-1">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <Trophy size={18} className="text-amber-500 mr-2" />
            <div>
              <p className="text-xs text-gray-400">Prize Pool</p>
              <p className="text-white font-bold">${tournament.prizePool}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <DollarSign size={18} className="text-green-500 mr-2" />
            <div>
              <p className="text-xs text-gray-400">Entry Fee</p>
              <p className="text-white font-bold">${tournament.entryFee}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Users size={18} className="text-blue-500 mr-2" />
            <div>
              <p className="text-xs text-gray-400">Players</p>
              <p className="text-white">{tournament.currentPlayers}/{tournament.maxPlayers}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar size={18} className="text-purple-500 mr-2" />
            <div>
              <p className="text-xs text-gray-400">Starts</p>
              <p className="text-white">{formatDate(tournament.startDate)}</p>
            </div>
          </div>
        </div>
      </CardBody>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => onView(tournament.id)}
          className="flex-1 mr-2"
        >
          View Details
        </Button>
        
        <Button 
          variant="primary" 
          onClick={() => onJoin(tournament.id)}
          disabled={!isJoinable}
          className="flex-1"
        >
          {isJoinable ? 'Join Now' : tournament.status === 'in-progress' ? 'In Progress' : 'Full'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;