// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-400 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Left Column */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Contact Information</h2>
          <p className="mt-2">Email: johnloydglee26@gmail.com</p>
          <p>Phone: (+63) 951-352-0909</p>
          <p>Location: Floridablaca, Pampanga</p>
        </div>
        {/* Right Column */}
        <div>
          <h2 className="text-xl font-bold">Follow Me</h2>
          <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-600 hover:underline">yourprofile</a></p>
          <p>GitHub: <a href="https://github.com/Pataja-dev" className="text-blue-600 hover:underline">Pataja-dev</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;