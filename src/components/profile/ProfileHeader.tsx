import React, { useState } from 'react';
import { Edit3, MapPin, Calendar, Github, Linkedin, Globe } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import type { User } from '../../types';
import { SkillTag } from '../SkillTag';

interface ProfileHeaderProps {
  user: User;
  isOwnProfile?: boolean;
  onEditProfile?: () => void;
}

export function ProfileHeader({ user, isOwnProfile = false, onEditProfile }: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <Avatar src={user.avatar} alt={user.name} size="xl" fallback={user.name} />
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 capitalize">
                {user.role?.replace('_', ' ')} Developer
              </p>
            </div>
            
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              {isOwnProfile ? (
                <Button variant="outline" onClick={onEditProfile}>
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <Button
                  variant={isFollowing ? "outline" : "primary"}
                  onClick={handleFollow}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {user.bio || 'No bio provided yet.'}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Joined {new Date(user.joinedAt).toLocaleDateString()}</span>
              </div>
              {/* Add more profile metadata as needed */}
            </div>

            {/* Skills */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.length > 0 ? (
                  user.skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} variant="primary" />
                  ))
                ) : (
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    No skills added yet
                  </span>
                )}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {user.interests.length > 0 ? (
                  user.interests.map((interest) => (
                    <SkillTag key={interest} skill={interest} variant="secondary" />
                  ))
                ) : (
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    No interests added yet
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}