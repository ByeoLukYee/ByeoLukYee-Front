import { createContext, useState } from "react";

export const ChattingContext = createContext();

function ChattingProvider({ children }) {
    const [lastMessage, setLastMessage] = useState([]);
    const [chatInfo, setChatInfo] = useState(null);

    const saveLastMessage = (lastMessage) => {
        setLastMessage(lastMessage);
    }

    const clickedChatRoom = (chatInfo) => {
        setChatInfo(chatInfo);
    }

    return (
        <ChattingContext.Provider value={{ lastMessage, saveLastMessage, chatInfo, clickedChatRoom }}>
            { children }
        </ChattingContext.Provider>
    )
}

export default ChattingProvider;