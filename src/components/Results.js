import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';
import Links from './Links';
import { SearchIcon } from '@heroicons/react/outline';

import logo from '../utils/images/logo.png';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';
import SearchResults from '../components/SearchResults';
import ImageResults from '../components/ImageResults';
import NewsResults from '../components/NewsResults';
import VideoResults from '../components/VideoResults';

const Results = () => {
  const { results, getResults, isLoading } = useResultContext();
  const path = document.location;
  const searchParams = new URLSearchParams(path.search).get('query');
  const [text, setText] = useState(searchParams ? searchParams : '');

  const navigate = useNavigate();
  const params = useSearchParams();

  const search = (e) => {
    e.preventDefault();
    
    if(text){
      navigate({search: `?query=${text}`});
    }
  }

  useEffect(() => {
    if(text){
      if(path.pathname == '/images'){
          getResults(path.pathname, text, '&search_type=images');
      }else if(path.pathname == '/news'){
        getResults(path.pathname, text, '&search_type=news');
      }else if(path.pathname == '/videos'){
        getResults(path.pathname, text, '&search_type=videos');
      }else{
        getResults(path.pathname, text);
      }
    }

  }, [searchParams, path.pathname]);

  const returnResults = () => {
    switch(path.pathname){
      case '/search':
        return(
          <div className="mx-auto mt-6 w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-20">
            {results?.map((result, idx) => (
              <SearchResults result={result} key={idx} />
            ))}
          </div>
        )
      case '/images':
        return(
          <div className="flex flex-wrap gap-2 mt-6 w-full justify-center">
            {results?.map((result, idx) => (
              <ImageResults result={result} key={idx}  />
            ))}
          </div>
        )
      case '/news':
        return(
          <div className="mx-auto mt-6 w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-20">
            {results?.map((result, idx) => (
              <NewsResults result={result} key={idx} />
            ))}
          </div>
        )
      case '/videos':
        return(
          <div className="flex flex-wrap gap-2 mt-6 w-full md:justify-start justify-center">
            {results?.map((result, idx) => (
              <VideoResults result={result} key={idx} />
            ))}
          </div>
        )
      default:
        return "Error";
    }
  }

  return (
    <>
   <div>
    <header className="sticky top-0 bg-white">
        <div className=" w-full flex items-center">
          <Link to="/">
            <img src={logo} height={40} width={120} className="cursor-pointer" />
          </Link>
            <form onSubmit={search} className="flex flex-grow px-6 py-3 ml-0 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Do Your Search"
                    className="flex flex-grow w-full focus:outline-none"
                />

                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
            </form>
        </div>

        <Links query={text} />
    </header>
  </div>
  <div>

  {isLoading ? <Loading /> : returnResults()}

  </div>
 </>
  )
}

export default Results;