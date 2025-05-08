import React from 'react';
import { Transaction } from '../types';
import { ArrowUpRight, ArrowDownRight, Award, DollarSign, Trophy } from 'lucide-react';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownRight className="text-emerald-500" />;
      case 'withdrawal':
        return <ArrowUpRight className="text-amber-500" />;
      case 'winnings':
        return <Trophy className="text-indigo-500" />;
      case 'bet':
        return <DollarSign className="text-red-500" />;
      case 'tournament-entry':
        return <Award className="text-purple-500" />;
      default:
        return <DollarSign className="text-gray-500" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-emerald-500';
      case 'pending':
        return 'text-amber-500';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">Transaction History</h3>
      </div>
      
      <div className="divide-y divide-gray-700">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div key={transaction.id} className="p-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                {getTransactionIcon(transaction.type)}
              </div>
              
              <div className="flex-1">
                <p className="text-white font-medium">{transaction.description}</p>
                <p className="text-gray-400 text-sm">{formatDate(transaction.timestamp)}</p>
              </div>
              
              <div className="text-right">
                <p className={`font-semibold ${transaction.type === 'withdrawal' || transaction.type === 'bet' || transaction.type === 'tournament-entry' ? 'text-red-500' : 'text-emerald-500'}`}>
                  {transaction.type === 'withdrawal' || transaction.type === 'bet' || transaction.type === 'tournament-entry' ? '-' : '+'} 
                  ${transaction.amount}
                </p>
                <p className={`text-xs ${getStatusClass(transaction.status)}`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-400">
            No transactions yet
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;