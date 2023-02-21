import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchIcon, NewspaperIcon, CameraIcon, FilmIcon } from '@heroicons/react/outline';

const links = [
    { url: '/search', text: 'All', icon: <SearchIcon className="text-sm h-5 mb-1 inline-flex" /> },
    { url: '/images', text: 'Images', icon: <CameraIcon className="text-sm h-5 mb-1 inline-flex"  /> },
    { url: '/news', text: 'News', icon: <NewspaperIcon className="text-sm h-5 mb-1 inline-flex" /> },
    { url: '/videos', text: 'Videos', icon: <FilmIcon className="text-sm h-5 mb-1 inline-flex" /> }
]

const Links = ({ query }) => {
  return (
    <div className="flex w-full items-center text-gray-700 justify-center sm:space-x-2 text-sm lg:text-base lg:justify-start lg:space-x-6 lg:pl-40 border-b">
        {links.map(({ url, text, icon }) => (
            <div className="flex items-center" key={text}>
                <NavLink to={`${url}?query=${query}`} className={(navData) => navData.isActive ? 'm-5 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-5 mb-0' }>
                   {icon} <span className="hidden sm:inline-flex">{text}</span>
                </NavLink>
            </div>
        ))}
    </div>
  )
}

export default Links;