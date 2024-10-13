import React from 'react';
import { Film, Search, Bell, User } from 'lucide-react';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Popular on Netflix</h2>
        <MovieGrid />
      </main>
    </div>
  );
}

export default App;