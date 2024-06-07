import  { useState } from 'react';

export default function ChatBot() {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (message: string) => {
        setMessages([...messages, message]);
        // Here you can add logic to generate a response message
    };
    

    return (
        <div>
            <h2>ChatBot</h2>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
            <input type="text" onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    handleSendMessage(event.currentTarget.value);
                    event.currentTarget.value = '';
                }
            }} />
        </div>
    );
}