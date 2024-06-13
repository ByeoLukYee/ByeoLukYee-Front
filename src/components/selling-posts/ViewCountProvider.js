import { createContext, useState } from "react";

export const viewCountContext = createContext();

function ViewCountProvider({ children }) {
    const [sellingViewCount, setSellingViewCount] = useState(0);
    const [buyingViewCount, setBuyingViewCount] = useState(0);

    const saveSellingViewCount = (count) => {
        setSellingViewCount(count);
    }

    const saveBuyingViewCount = (count) => {
        setBuyingViewCount(count)
    }

    return (
        <viewCountContext.Provider value={{ sellingViewCount, saveSellingViewCount, buyingViewCount, saveBuyingViewCount }}>
            { children }
        </viewCountContext.Provider>
    )
}

export default ViewCountProvider;