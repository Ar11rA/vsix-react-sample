// OutputDisplay.tsx
import React from 'react';

export interface MessagePair {
  question: string;
  answer: string;
}

interface OutputDisplayProps {
  messageHistory: MessagePair[];
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ messageHistory }) => {
  return (
    <div>
      {messageHistory.map((pair, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <p>{pair.question}</p>
          <p>{pair.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default OutputDisplay;
