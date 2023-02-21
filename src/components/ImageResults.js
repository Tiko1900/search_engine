import React from 'react';

const ImageResults = ({result: {image, link, title, domain}}) => {
  return (
    <div className="flex flex-col max-w-xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className="w-[280px] h-[220px]">
          <img src={image} alt={link} loading="lazy" className="object-contain rounded-lg h-full w-full" />
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

export default ImageResults;