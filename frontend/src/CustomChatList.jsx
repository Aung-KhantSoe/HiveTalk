import React, { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
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
            <div className="chat-list">
                <div className="chat-item static">
                    <div className="chat-avatar">Chat Gpt</div>
                </div>
                {chats.map(chat => (
                    <div key={chat.id} className="chat-item">
                        <div className="chat-avatar">{chat.username}</div>
                    </div>
                ))}
            </div>
            <div className='chat-wrapper'>
                <ChatEngine
                    projectId={projectId}
                    username={username}
                    secret={secret}
                    style={{ height: '100%' }}
                    renderChatList={(chatAppState) => <ChatList chatAppState={chatAppState}/>}
                />
                heyyy
            </div>
        </div>
    );
};

export default ChatsPage;
