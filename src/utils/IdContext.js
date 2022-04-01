import React, { createContext, useState } from 'react';


export const IdContext = createContext();

const IdContextProvider = (props) => {
    const [currentId, setCurrentId] = useState(null);

    return (
        <IdContext.Provider value={{ currentId, setCurrentId }} >
            {props.children}
        </IdContext.Provider>
    )
}

export default IdContextProvider;