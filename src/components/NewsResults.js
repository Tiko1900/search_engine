import React from 'react';
import { ClockIcon } from '@heroicons/react/outline';

const NewsResults = ({result: {title, link, snippet, date, thumbnail}}) => {
  return (
    <div className="max-w-xl mb-5">
      <div className="group">
        <div className="flex">
        <div>
          <a href={link}>
            <h2 className="text-xl text-blue-800 font-medium group-hover:underline">
              {title}
            </h2>
          </a>
          <p>{snippet} <span className="mt-2 block text-gray-500 text-sm"><ClockIcon className="h-5 w-5 inline mb-1" /> {date}</span></p>
        </div>
        <img src={thumbnail} alt={title} loading="lazy" className="ml-2 w-auto h-13 rounded-lg hidden md:block" />
        </div>
            
      </div>
    </div>
  )
}

export default NewsResults;