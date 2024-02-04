// ChatBox.tsx
import React, { useState } from 'react';
import styles from './ChatBox.module.css'; // Make sure you have imported the CSS module
import rightArrowIcon from './rightArrow.svg'; // Import the icon, make sure the path is correct

export interface ChatBoxProps {
  onSendMessage: (message: string) => void;
}


const ChatBox: React.FC<ChatBoxProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim().length > 0) {
      onSendMessage(message);
      setMessage(''); // Reset textarea after sending
    }
  };

  return (
    <div className={styles.chatBox}>
      <textarea
        className={styles.inputField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows={3} // Set the default number of rows for the textarea
      />
      <button className={styles.sendButton} onClick={sendMessage}>
        <img src={rightArrowIcon} alt="Send" /> {/* Replace text with the icon */}
      </button>
    </div>
  );
};

export default ChatBox;
