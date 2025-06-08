import type { Message } from '../../types';
import { Avatar } from '../ui/Avatar';

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const isOwnMessage = message.sender.id === currentUserId;
        return (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${isOwnMessage ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <Avatar
              src={message.sender.avatar}
              alt={message.sender.name}
              size="sm"
              fallback={message.sender.name}
            />
            <div className={`flex-1 ${isOwnMessage ? 'text-right' : ''}`}>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {message.sender.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div
                className={`inline-block px-4 py-2 rounded-lg max-w-xs lg:max-w-md ${
                  isOwnMessage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}