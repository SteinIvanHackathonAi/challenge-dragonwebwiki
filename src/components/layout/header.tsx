import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <nav>
          <Link to="/favorites" className="mx-2">Favoritos</Link>
          <Link to="/create" className="mx-2">Crear Dragón</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;