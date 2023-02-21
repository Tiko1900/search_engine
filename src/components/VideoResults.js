import React from 'react';
import { PlayIcon } from '@heroicons/react/outline';

const VideoResults = ({result: {title, link, image, domain}}) => {
  return (
    <div className="flex flex-col max-w-xl">
      <a href={link} target="_blank" rel="noopener norefer">
        <p className="w-[280px] h-[220px] relative">
          <img src={image} alt={link} loading="lazy" className="rounded-lg h-full w-full" />
          <PlayIcon className="absolute top-[45%] left-[45%] w-12 h-12 text-gray-600 rounded-full bg-white" />
        </p>
        <p className="text-ellipsis block whitespace-nowrap overflow-hidden w-[280px]">
          <span className="font-medium">{domain}</span>
          <br />
          <span className="text-gray-500 text-sm">{title}</span>
        </p>
      </a>
    </div>
  )
}

export default VideoResults;