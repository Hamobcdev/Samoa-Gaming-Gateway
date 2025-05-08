import React, { useState } from 'react';
import { ArrowRight, Trophy, Wallet, Gamepad2, Shield } from 'lucide-react';
import Button from '../components/common/Button';
import GameCard from '../components/games/GameCard';
import TournamentCard from '../components/tournaments/TournamentCard';
import { mockGames, mockTournaments, mockTelecomWallets } from '../data/mockData';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredGames = mockGames.slice(0, 3);
  const upcomingTournaments = mockTournaments.filter(t => t.status === 'upcoming').slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7862657/pexels-photo-7862657.jpeg')] bg-center bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/70 to-purple-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Samoa's Gateway to <span className="text-indigo-400">Global Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Connect with Samoan gamers worldwide through local telecom e-wallets. Join tournaments, compete one-on-one, and access the global gaming marketplace.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => onNavigate('signup')}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('tournaments')}
                rightIcon={<ArrowRight size={18} />}
                className="border-gray-300 text-white hover:bg-gray-800"
              >
                Browse Tournaments
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-indigo-500 filter blur-xl opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-purple-600 filter blur-xl opacity-30"></div>
              
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {mockTelecomWallets.slice(0, 2).map(wallet => (
                    <div key={wallet.id} className="bg-gray-700/50 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{wallet.provider}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <h3 className="text-white font-semibold mb-2 flex items-center">
                    <Trophy className="w-5 h-5 text-amber-500 mr-2" />
                    PUBG Samoa Championship
                  </h3>
                  <div className="flex justify-between text-gray-300 text-sm">
                    <span>Prize Pool: $2,000</span>
                    <span>64 Players</span>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      fullWidth
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      Join with $30
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-sm">Secure payment</div>
                  <Shield className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connecting Samoan gamers to global opportunities through secure local payment solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect E-Wallet</h3>
              <p className="text-gray-400">
                Link your Samoan telecom e-wallet securely to your GameWallet account for instant deposits and withdrawals.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Play & Compete</h3>
              <p className="text-gray-400">
                Join local and international tournaments or challenge other players to PUBG matches with real stakes.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Win & Earn</h3>
              <p className="text-gray-400">
                Convert your winnings to game tokens or withdraw instantly to your local e-wallet. Connect with the global gaming economy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Games Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Popular Games</h2>
            <Button 
              variant="ghost" 
              rightIcon={<ArrowRight size={18} />}
              onClick={() => onNavigate('games')}
              className="text-indigo-400 hover:text-indigo-300"
            >
              View All Games
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                onPlay={(gameId) => console.log(`Play game: ${gameId}`)} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Tournaments Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Upcoming Tournaments</h2>
            <Button 
              variant="ghost" 
              rightIcon={<ArrowRight size={18} />}
              onClick={() => onNavigate('tournaments')}
              className="text-indigo-400 hover:text-indigo-300"
            >
              View All Tournaments
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingTournaments.map(tournament => (
              <TournamentCard 
                key={tournament.id} 
                tournament={tournament} 
                onJoin={(id) => console.log(`Join tournament: ${id}`)} 
                onView={(id) => console.log(`View tournament: ${id}`)} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Supported Wallets Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Supported E-Wallets</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We partner with Samoa's leading telecom providers to make competitive gaming accessible to everyone
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mockTelecomWallets.map(wallet => (
              <div key={wallet.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-xl font-semibold text-white">{wallet.provider}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
            >
              Request Your Provider
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Samoa's Growing Gaming Community
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Connect with players across Samoa and beyond. Compete in tournaments, earn rewards, and be part of the global gaming revolution.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onNavigate('signup')}
            className="bg-white text-indigo-900 hover:bg-gray-100"
          >
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;