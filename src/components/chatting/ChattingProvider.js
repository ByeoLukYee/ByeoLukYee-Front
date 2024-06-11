import { createContext, useState } from "react";

export const ChattingContext = createContext();

function ChattingProvider({ children }) {
    const [lastMessage, setLastMessage] = useState([]);
    const [chatInfo, setChatInfo] = useState(null);
    const [chatRoomId, setChatRoomId] = useState(null);

    const saveLastMessage = (lastMessage) => {
        setLastMessage(lastMessage);
    }

    const clickedChatRoom = (chatInfo) => {
        setChatInfo(chatInfo);
    }

    const saveChatRoomId = (id) => {
        setChatRoomId(id);
    }

    return (
        <ChattingContext.Provider value={{ lastMessage, saveLastMessage, chatInfo, clickedChatRoom, chatRoomId, saveChatRoomId }}>
            { children }
        </ChattingContext.Provider>
    )
}

export default ChattingProvider;