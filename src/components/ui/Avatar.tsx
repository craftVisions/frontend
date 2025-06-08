import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

export function Avatar({ src, alt, size = 'md', fallback }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  if (!src) {
    return (
      <div className={`${sizes[size]} rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center`}>
        {fallback ? (
          <span className={`font-medium text-gray-600 dark:text-gray-300 ${textSizes[size]}`}>
            {fallback.charAt(0).toUpperCase()}
          </span>
        ) : (
          <User className={`text-gray-400 ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : size === 'lg' ? 'w-6 h-6' : 'w-8 h-8'}`} />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover ring-2 ring-white dark:ring-gray-700`}
    />
  );
}