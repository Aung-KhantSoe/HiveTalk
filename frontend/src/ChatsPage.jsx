import React, { useState, useEffect } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { ChatList } from './ChatList';

const ChatsPage = (props) => {
    const projectId = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;
    const username = props.user.username;
    const secret = props.user.secret;
    
    // Placeholder for dynamic chats
    const [chats, setChats] = useState([]);

    useEffect(() => {
        // Fetch dynamic chats and set them in state
        // Assuming fetchChats is a function that fetches the dynamic chats
        const fetchChats = async () => {
            const response = await fetchDynamicChats();
            setChats(response);
        };
        fetchChats();
    }, []);

    return (
        <div className="background">
            
            <div className='chat-wrapper'>
            <PrettyChatWindow
                    projectId={projectId}
                    username={username}
                    secret={secret}
                    style={{ height: '100%' }}
                    renderChatList={(chatList) => <ChatList chatList={chatList}/>}
                />

                       
                
            </div>
        </div>
    );
};

export default ChatsPage;
