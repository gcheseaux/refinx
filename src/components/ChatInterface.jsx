import React, { useState } from 'react';

export const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    // TODO: Send message to the backend and handle the response
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(message.sender === 'user' ? styles.userMessage : styles.botMessage),
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          style={styles.input}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid #444',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
  },
  messagesContainer: {
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    backgroundColor: '#2d2d2d',
    color: 'white',
  },
  message: {
    marginBottom: '8px',
    padding: '8px 12px',
    borderRadius: '4px',
    maxWidth: '70%',
  },
  userMessage: {
    marginLeft: 'auto',
    backgroundColor: '#007bff',
    color: 'white',
  },
  botMessage: {
    marginRight: 'auto',
    backgroundColor: '#3d3d3d',
    color: 'white',
  },
  inputContainer: {
    display: 'flex',
    padding: '16px',
    borderTop: '1px solid #444',
    backgroundColor: '#2d2d2d',
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #444',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#3d3d3d',
    color: 'white',
  },
  sendButton: {
    marginLeft: '8px',
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
