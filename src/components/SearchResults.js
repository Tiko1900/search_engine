import React from 'react';

const SearchResults = ({result: { title, snippet, link}}) => {
    return (
        <div className="max-w-xl mb-5">
            <div className="group">
                <a href={link} className="text-sm">
                    {link}
                </a>
                <a href={link}>
                    <h2 className="text-xl text-blue-800 font-medium group-hover:underline">
                        {title}
                    </h2>
                </a>
            </div>
            <p>{snippet}</p>
        </div>
    )
}

export default SearchResults;