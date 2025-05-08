import React, { useState } from 'react';
import { Bell, Wallet, Menu, X, Trophy, Gamepad2, Home, Users } from 'lucide-react';
import { mockUser, mockNotifications } from '../../data/mockData';
import Avatar from '../common/Avatar';
import Badge from '../common/Badge';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const unreadNotifications = mockNotifications.filter(n => !n.read).length;
  
  const navItems = [
    { name: 'Home', icon: <Home size={20} />, id: 'home' },
    { name: 'Games', icon: <Gamepad2 size={20} />, id: 'games' },
    { name: 'Tournaments', icon: <Trophy size={20} />, id: 'tournaments' },
    { name: 'Leaderboard', icon: <Users size={20} />, id: 'leaderboard' }
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Gamepad2 size={24} className="text-indigo-500" />
              <span className="text-white font-bold text-xl">GameWallet</span>
            </div>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2
                    ${currentPage === item.id 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                    transition duration-150 ease-in-out
                  `}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Wallet */}
            <button 
              className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
              onClick={() => onNavigate('wallet')}
            >
              <Wallet size={20} />
            </button>
            
            {/* Notifications */}
            <div className="relative">
              <button 
                className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell size={20} />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-xs font-bold text-white">
                    {unreadNotifications}
                  </span>
                )}
              </button>
              
              {/* Notification Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-md shadow-lg overflow-hidden z-50">
                  <div className="p-3 border-b border-gray-700 flex justify-between items-center">
                    <h3 className="text-white font-semibold">Notifications</h3>
                    <button className="text-gray-400 hover:text-white text-xs">Mark all as read</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-3 hover:bg-gray-700 border-b border-gray-700 cursor-pointer ${!notification.read ? 'bg-gray-750' : ''}`}
                      >
                        <div className="flex">
                          <div className="w-2 mr-3">
                            {!notification.read && <div className="h-2 w-2 rounded-full bg-indigo-500"></div>}
                          </div>
                          <div>
                            <p className="text-sm text-white">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(notification.timestamp).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-700 text-center">
                    <button className="text-indigo-400 text-sm hover:text-indigo-300">View all notifications</button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile */}
            <div className="relative">
              <button 
                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => onNavigate('profile')}
              >
                <Avatar 
                  src={mockUser.avatar} 
                  alt={mockUser.username}
                  size="sm"
                  status="online"
                />
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium
                  ${currentPage === item.id 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }
                `}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;