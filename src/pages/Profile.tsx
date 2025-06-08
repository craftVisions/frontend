import React from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { Navbar } from '../components/Navbar';

export default function Profile() {
  const user = {
    id: '1',
    name: 'sunny',
    email: 'sunny@gmail.com',
    skills: [],
    interests: [],
    joinedAt: new Date(),
    avatar: 'https://avatars.githubusercontent.com/u/96371748?s=400&u=442afde9050d965822461c9586d576b525acda0a&v=4',
  };

  if (!user) {
    return null;
  }

  const handleEditProfile = () => {
    // In a real app, this would open an edit profile modal or page
    console.log('Edit profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar currentPage="profile" onNavigate={() => console.log('navigate')} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader user={user} isOwnProfile={true} onEditProfile={handleEditProfile} />

        <ProfileTabs userId={user.id} />
      </div>
    </div>
  );
}
