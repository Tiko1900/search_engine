import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://api.scaleserp.com/search';
const api_key = process.env.REACT_APP_SEARCH_API_KEY;

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getResults = async (type, searchTerm, searchType = '') => {
        setIsLoading(true);

        const response = await axios.get(`${baseUrl}?api_key=${api_key}&q=${searchTerm}${searchType}`)
            .then((res) => (res.data));
          
        if(type.includes('/news')){
            setResults(response.news_results);
        }else if(type.includes('/images')){
            setResults(response.image_results);
        }else if(type.includes('/videos')){
            setResults(response.video_results);
        }else{
            setResults(response.organic_results);
        }

        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);

