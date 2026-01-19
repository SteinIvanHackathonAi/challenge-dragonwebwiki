import React from 'react';

const Spinner: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`loader ${className}`}></div>;
};

export default Spinner;