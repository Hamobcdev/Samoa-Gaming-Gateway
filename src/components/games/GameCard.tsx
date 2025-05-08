import React from 'react';
import { Game } from '../../types';
import Card, { CardBody } from '../common/Card';
import Button from '../common/Button';
import { Users, Trophy } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onPlay: (gameId: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <Card hoverEffect className="h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${game.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex items-center space-x-2 mb-1">
            <Users size={16} className="text-gray-300" />
            <span className="text-sm text-gray-300">{game.players} Players</span>
          </div>
          <h3 className="text-xl font-bold text-white">{game.title}</h3>
        </div>
      </div>
      
      <CardBody className="flex-1 flex flex-col">
        <p className="text-gray-300 mb-4 flex-1">{game.description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Trophy size={18} className="text-amber-500 mr-1" />
              <span className="text-amber-500 font-medium">${game.minBet} - ${game.maxBet}</span>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            fullWidth
            onClick={() => onPlay(game.id)}
          >
            Play Now
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default GameCard;