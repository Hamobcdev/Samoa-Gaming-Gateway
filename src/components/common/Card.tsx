import { configParseGasLimitsPrices } from '@ton/ton';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  bordered = false
}) => {
  return (
    <div 
      className={`
        bg-gray-800 
        rounded-xl 
        overflow-hidden 
        ${hoverEffect ? 'transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg' : ''} 
        ${bordered ? 'border border-gray-700' : 'shadow-md'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border-b border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border-t border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;