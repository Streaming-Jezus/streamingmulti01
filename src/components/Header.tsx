import React from 'react';
import { Film, Search, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Film className="text-red-600 w-8 h-8 mr-2" />
          <h1 className="text-red-600 text-2xl font-bold">Netflix Clone</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">TV Shows</a></li>
            <li><a href="#" className="hover:text-gray-300">Movies</a></li>
            <li><a href="#" className="hover:text-gray-300">New & Popular</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6" />
          <Bell className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;