import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/outline';

import logo from '../utils/images/logo.png';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    navigate(`/search?query=${searchTerm}`);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <form onSubmit={handleSearch} className="flex flex-col mt-44 items-center flex-grow w-4/5">
        <img src={logo} alt="logo" className="w-[200px] h-[180px] md:w-[300px] md:h-[260px]" />

        <div className="w-full flex hover:shadow-lg max-w-md border 
          border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl 
          items-center rounded-full"
        >
          <input 
            type="text" 
            placeholder="Make Your Search Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none flex-grow"
          />
          <SearchIcon className="h-5 mr-3 text-gray-500 cursor-pointer hover:h-6 " onClick={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default Home;