import React, { useState } from 'react';
import { ArrowLeft, Plus, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Button from '../components/common/Button';
import WalletBalance from '../components/wallet/WalletBalance';
import TransactionHistory from '../components/wallet/TransactionHistory';
import { mockUser, mockTelecomWallets } from '../data/mockData';

interface WalletPageProps {
  onNavigate: (page: string) => void;
}

const WalletPage: React.FC<WalletPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'withdraw'>('overview');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [amount, setAmount] = useState('');
  
  const [depositSuccess, setDepositSuccess] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  
  const handleDeposit = () => {
    if (selectedWallet && amount) {
      // In a real app, this would call an API
      setTimeout(() => {
        setDepositSuccess(true);
        setTimeout(() => {
          setActiveTab('overview');
          setDepositSuccess(false);
          setAmount('');
          setSelectedWallet('');
        }, 2000);
      }, 1500);
    }
  };
  
  const handleWithdraw = () => {
    if (selectedWallet && amount) {
      // In a real app, this would call an API
      setTimeout(() => {
        setWithdrawSuccess(true);
        setTimeout(() => {
          setActiveTab('overview');
          setWithdrawSuccess(false);
          setAmount('');
          setSelectedWallet('');
        }, 2000);
      }, 1500);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => onNavigate('home')}
            className="text-gray-400 mr-3"
          >
            Back
          </Button>
          <h1 className="text-2xl font-bold text-white">Wallet & Transactions</h1>
        </div>
        
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-700">
            <nav className="flex">
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'overview' 
                    ? 'text-white border-b-2 border-indigo-500' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'deposit' 
                    ? 'text-white border-b-2 border-indigo-500' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('deposit')}
              >
                Deposit
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === 'withdraw' 
                    ? 'text-white border-b-2 border-indigo-500' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('withdraw')}
              >
                Withdraw
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <WalletBalance 
                  balance={mockUser.wallet.balance} 
                  onDeposit={() => setActiveTab('deposit')}
                  onWithdraw={() => setActiveTab('withdraw')}
                />
                
                <TransactionHistory transactions={mockUser.wallet.transactions} />
              </div>
            )}
            
            {activeTab === 'deposit' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <ArrowDownRight size={18} className="text-emerald-500 mr-2" />
                  Deposit Funds
                </h2>
                
                {depositSuccess ? (
                  <div className="bg-emerald-900/30 border border-emerald-800 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Deposit Successful!</h3>
                    <p className="text-emerald-300">Your funds have been added to your wallet.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Select E-Wallet Provider
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {mockTelecomWallets.map(wallet => (
                          <button
                            key={wallet.id}
                            className={`p-4 rounded-lg border ${
                              selectedWallet === wallet.id
                                ? 'border-indigo-500 bg-indigo-900/20'
                                : 'border-gray-700 hover:border-gray-600'
                            } flex items-center`}
                            onClick={() => setSelectedWallet(wallet.id)}
                          >
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                              <Wallet size={16} className="text-indigo-400" />
                            </div>
                            <span className="text-white">{wallet.provider}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Amount to Deposit
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="number"
                          min="5"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="block w-full pl-7 pr-12 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <button
                            type="button"
                            onClick={() => setAmount('25')}
                            className="px-2 mr-1 text-xs rounded bg-gray-600 text-white"
                          >
                            $25
                          </button>
                          <button
                            type="button"
                            onClick={() => setAmount('50')}
                            className="px-2 mr-1 text-xs rounded bg-gray-600 text-white"
                          >
                            $50
                          </button>
                          <button
                            type="button"
                            onClick={() => setAmount('100')}
                            className="px-2 mr-3 text-xs rounded bg-gray-600 text-white"
                          >
                            $100
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Button 
                        variant="primary" 
                        leftIcon={<Plus size={16} />}
                        fullWidth
                        onClick={handleDeposit}
                        disabled={!selectedWallet || !amount}
                      >
                        Deposit Now
                      </Button>
                      <p className="text-gray-500 text-sm mt-2">
                        Funds will be instantly available in your GameWallet account.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'withdraw' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <ArrowUpRight size={18} className="text-amber-500 mr-2" />
                  Withdraw Funds
                </h2>
                
                {withdrawSuccess ? (
                  <div className="bg-emerald-900/30 border border-emerald-800 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Withdrawal Initiated!</h3>
                    <p className="text-emerald-300">Your funds will be transferred to your e-wallet shortly.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Select E-Wallet Provider
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {mockTelecomWallets.map(wallet => (
                          <button
                            key={wallet.id}
                            className={`p-4 rounded-lg border ${
                              selectedWallet === wallet.id
                                ? 'border-indigo-500 bg-indigo-900/20'
                                : 'border-gray-700 hover:border-gray-600'
                            } flex items-center`}
                            onClick={() => setSelectedWallet(wallet.id)}
                          >
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                              <Wallet size={16} className="text-indigo-400" />
                            </div>
                            <span className="text-white">{wallet.provider}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Amount to Withdraw
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="number"
                          min="5"
                          max={mockUser.wallet.balance}
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="block w-full pl-7 pr-12 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <button
                            type="button"
                            onClick={() => setAmount('25')}
                            className="px-2 mr-1 text-xs rounded bg-gray-600 text-white"
                          >
                            $25
                          </button>
                          <button
                            type="button"
                            onClick={() => setAmount('50')}
                            className="px-2 mr-1 text-xs rounded bg-gray-600 text-white"
                          >
                            $50
                          </button>
                          <button
                            type="button"
                            onClick={() => setAmount('100')}
                            className="px-2 mr-3 text-xs rounded bg-gray-600 text-white"
                          >
                            $100
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        Available: ${mockUser.wallet.balance.toFixed(2)}
                      </p>
                    </div>
                    
                    <div>
                      <Button 
                        variant="primary" 
                        leftIcon={<ArrowUpRight size={16} />}
                        fullWidth
                        onClick={handleWithdraw}
                        disabled={!selectedWallet || !amount || Number(amount) > mockUser.wallet.balance}
                      >
                        Withdraw Now
                      </Button>
                      <p className="text-gray-500 text-sm mt-2">
                        Funds will be transferred to your e-wallet within 1-2 business hours.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;