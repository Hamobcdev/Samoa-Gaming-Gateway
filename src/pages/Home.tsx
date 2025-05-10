import React, { useState } from 'react';
import { ArrowRight, Trophy, Wallet, Gamepad2, Shield } from 'lucide-react';
import Button from '../components/common/Button';
import GameCard from '../components/games/GameCard';
import TournamentCard from '../components/tournaments/TournamentCard';
import { mockGames, mockTournaments, mockTelecomWallets } from '../data/mockData';
import { motion } from 'framer-motion';

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
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Samoa's Gateway to <span className="text-indigo-400">Global Gaming</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Connect with Samoan gamers worldwide through local telecom e-wallets. Join tournaments, compete one-on-one, and access the global gaming marketplace.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => onNavigate('signup')}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('tournaments')}
                  rightIcon={<ArrowRight size={18} />}
                  className="border-gray-300 text-white hover:bg-gray-800"
                >
                  Browse Tournaments
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-indigo-500 filter blur-xl opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-purple-600 filter blur-xl opacity-30"></div>
              
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {mockTelecomWallets.slice(0, 2).map(wallet => (
                    <motion.div 
                      key={wallet.id}
                      className="bg-gray-700/50 rounded-lg p-3 flex items-center space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + Number(wallet.id) * 0.1, duration: 0.6 }}
                    >
                      <Wallet size={20} className="text-indigo-400" />
                      <div>
                        <p className="text-white text-sm font-semibold">{wallet.name}</p>
                        <p className="text-xs text-gray-300">{wallet.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 text-center">
                  Securely powered by local providers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          className="text-2xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Games
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <GameCard 
                game={game} 
                onPlay={(gameId) => console.log(`Play game with ID: ${gameId}`)} 
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.h2 
          className="text-2xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Tournaments
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {upcomingTournaments.map((tournament, index) => (
            <motion.div 
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <TournamentCard 
                tournament={tournament} 
                onJoin={() => console.log(`Join tournament with ID: ${tournament.id}`)} 
                onView={() => console.log(`View tournament with ID: ${tournament.id}`)} 
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
