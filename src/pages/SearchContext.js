import React,{ createContext, useState } from 'react';


const SearchContext = createContext()

function SearchProvider ({children}) {
    const [searchInput, setsearchInput] = useState('')
    const handleSearch = (input) => {
        setsearchInput(input)
    };
   
    const value = {
        searchInput,
        handleSearch,
    }
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider >
    )
}
export { SearchProvider, SearchContext }