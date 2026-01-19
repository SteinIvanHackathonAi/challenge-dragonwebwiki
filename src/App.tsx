import React from 'react';
import Header from './components/layout/header';
import DragonList from './components/DragonList';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header title="Dragon Web Wiki" />
      <main className="container mx-auto p-4">
        <DragonList />
      </main>
    </div>
  );
};

export default App;