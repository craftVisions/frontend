import React, { useState } from 'react';
import { ArrowLeft, Users, Settings, Video, Phone } from 'lucide-react';
import { Avatar } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockProjects, mockUsers } from '../data/mockData';
import type { Message } from '../types';
import { Navbar } from '../components/Navbar';
import { MessageList } from '../components/chat/MessageList';
import { MessageInput } from '../components/chat/MessageInput';

export default function Chat() {
  const user = {
    id: '1',
    name: 'sunny',
    email: 'sunny@gmail.com',
    skills: [],
    interests: [],
    joinedAt: new Date(),
    avatar: 'https://avatars.githubusercontent.com/u/96371748?s=400&u=442afde9050d965822461c9586d576b525acda0a&v=4',
  };
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hey everyone! Welcome to the EcoTracker project chat. Looking forward to working together!',
      sender: mockUsers[0],
      timestamp: new Date(Date.now() - 3600000),
      projectId: '1',
    },
    {
      id: '2',
      content: 'Excited to contribute! I can help with the backend API development.',
      sender: mockUsers[1],
      timestamp: new Date(Date.now() - 1800000),
      projectId: '1',
    },
    {
      id: '3',
      content: "Perfect! I'll focus on the React frontend. Should we set up a quick call to discuss the architecture?",
      sender: user!,
      timestamp: new Date(Date.now() - 900000),
      projectId: '1',
    },
  ]);

  // Mock project data
  const currentProject = mockProjects[0];
  const contributors = [mockUsers[0], mockUsers[1], user!];

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: user!,
      timestamp: new Date(),
      projectId: currentProject.id,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar currentPage="messages" onNavigate={() => console.log('navigate')} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-180px)]">
          {/* Contributors Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Contributors ({contributors.length})
                </h3>
              </div>

              <div className="flex-1 p-4 space-y-3">
                {contributors.map((contributor) => (
                  <div
                    key={contributor.id}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="relative">
                      <Avatar src={contributor.avatar} alt={contributor.name} size="sm" fallback={contributor.name} />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{contributor.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{'backend'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col" padding="sm">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => console.log('navigate to feed.')}
                    className="lg:hidden p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h2 className="font-semibold text-gray-900 dark:text-white">{currentProject.title}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contributors.length} members</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <MessageList messages={messages} currentUserId={user.id} />

              {/* Message Input */}
              <MessageInput onSendMessage={handleSendMessage} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
