// Loader.js or Loader.tsx if you're using TypeScript
import React from 'react';
import './Loader.module.css'; // Assume you have styles defined for the loader

const Loader: React.FC = () => {
  return (
    <div className="Loader">
      {/* You can use any loading spinner here, e.g., a CSS-based spinner */}
      Loading...
    </div>
  );
};

export default Loader;
