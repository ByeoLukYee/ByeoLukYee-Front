import { createContext, useState } from "react";

export const viewCountContext = createContext();

function ViewCountProvider({ children }) {
    const [viewCount, setViewCount] = useState(0);

    const saveViewCount = (count) => {
        setViewCount(count);
    }

    return (
        <viewCountContext.Provider value={{ viewCount, saveViewCount }}>
            { children }
        </viewCountContext.Provider>
    )
}

export default ViewCountProvider;