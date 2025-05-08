import React from 'react';
import { ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react';
import Button from '../common/Button';

interface WalletBalanceProps {
  balance: number;
  onDeposit: () => void;
  onWithdraw: () => void;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ 
  balance, 
  onDeposit, 
  onWithdraw 
}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl shadow-lg p-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full opacity-10 -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 rounded-full opacity-10 -ml-10 -mb-10"></div>
      
      <h3 className="text-lg font-semibold text-gray-200 mb-2">Your Balance</h3>
      
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold text-white">${balance.toFixed(2)}</span>
        <span className="text-indigo-200 ml-2 text-sm">Available</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant="primary"
          onClick={onDeposit}
          leftIcon={<Plus size={16} />}
          className="bg-indigo-700 hover:bg-indigo-600"
          fullWidth
        >
          Deposit
        </Button>
        
        <Button 
          variant="outline"
          onClick={onWithdraw}
          leftIcon={<ArrowUpRight size={16} />}
          className="border-indigo-400 text-indigo-100 hover:bg-indigo-800"
          fullWidth
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default WalletBalance;