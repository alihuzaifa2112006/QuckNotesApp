import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="relative h-screen md:h-[88vh] w-full overflow-hidden flex flex-col items-center justify-center text-white text-center px-4">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 select-none">Ease For Your Life!</h1>
        <p className="text-lg sm:text-xl md:text-lg opacity-80 select-none z-10">The Simpler Way to Note Everything.</p>
        <p className="mt-3 text-xs sm:text-sm select-none opacity-60">Free. Fast. Forever Yours.</p>
      </div>
      <div className="w-full max-w-md bg-white h-[1px] mt-6 sm:mt-8 opacity-15"></div>

      <button
        onClick={() => navigate('/notes')}
        className="cursor-pointer mt-6 sm:mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg hover:scale-105 transition text-sm sm:text-base"
      >
        Start Writing Now
      </button>
    </div>
  );
};

export default Home;