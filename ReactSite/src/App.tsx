import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import ChatBox from './ChatBox';
import OutputDisplay from './OutputDisplay';
// import Loader from './Loader';

interface MessagePair {
  question: string;
  answer: string;
}


const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messageHistory, setMessageHistory] = useState<MessagePair[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchResponse = async () => {
      if (!message) return; // If there is no message, don't perform the fetch

      setIsLoading(true);
      const encodedMessage = encodeURIComponent(message);
      const url = `https://api.quotable.io/random`;

      try {
        const response = await axios.get(url);
        console.log(response.data)
        const newPair: MessagePair = {
          question: `Q: ${message}`,
          answer: `A: ${response.data.content || 'No content received'}`,
        };
        setMessageHistory((prevHistory) => [...prevHistory, newPair]);
      } catch (error) {
        console.error('There was an error fetching the API:', error);
      } finally {
        setIsLoading(false); // Stop loading regardless of the result
      }
    };

    fetchResponse();
  }, [message]); // Only re-run the effect if the message changes

  const handleNewMessage = (newMessage: string) => {
    setMessage(newMessage); // Set the message which will trigger the useEffect
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <ChatBox onSendMessage={handleNewMessage} />
       {/* Always display the message history */}
       <OutputDisplay messageHistory={messageHistory} />
      {/* Show loading indicator only for new messages */}
      {isLoading && <ClipLoader color="#28a745" loading={isLoading} size={60} />}
    </div>
  );
};

export default App;
