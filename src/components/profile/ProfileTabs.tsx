import React, { useState } from 'react';
import { Code, GitBranch, Users, Star } from 'lucide-react';
import { ProjectCard } from '../project/ProjectCard';
import { Avatar } from '../ui/Avatar';
import { Card } from '../ui/Card';
import { mockProjects, mockUsers } from '../../data/mockData';

interface ProfileTabsProps {
  userId: string;
}

export function ProfileTabs({ userId }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState('contributed');

  const tabs = [
    { id: 'contributed', label: 'Contributed Projects', icon: GitBranch },
    { id: 'created', label: 'Created Projects', icon: Code },
    { id: 'collaborators', label: 'Collaborators', icon: Users }
  ];

  // Mock data - in a real app, this would be fetched based on userId
  const contributedProjects = mockProjects.slice(0, 2);
  const createdProjects = mockProjects.slice(0, 1);
  const collaborators = mockUsers;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contributed':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {contributedProjects.length > 0 ? (
              contributedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <GitBranch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No contributed projects yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Start contributing to projects to see them here
                </p>
              </div>
            )}
          </div>
        );
      
      case 'created':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {createdProjects.length > 0 ? (
              createdProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No created projects yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create your first project to get started
                </p>
              </div>
            )}
          </div>
        );
      
      case 'collaborators':
        return (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collaborator) => (
              <Card key={collaborator.id} hover>
                <div className="text-center">
                  <Avatar
                    src={collaborator.avatar}
                    alt={collaborator.name}
                    size="lg"
                    fallback={collaborator.name}
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-white mt-3">
                    {collaborator.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {collaborator.role} Developer
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2 justify-center">
                    {collaborator.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span>2 projects together</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  isActive
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
}