import React, { useState } from "react";
import "./Chatbot.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default styles for DatePicker

const Chatbot = () => {
  const [chatInput, setChatInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date

  const handleButtonClick = (presetText) => {
    setChatInput(presetText);
    addChatMessage("user", presetText);
    simulateBotResponse(presetText); // Simulate a bot response
  };

  const handleInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (chatInput.trim() === "") return;
    addChatMessage("user", chatInput);
    simulateBotResponse(chatInput);
    setChatInput("");
  };

  const addChatMessage = (sender, message) => {
    setChatLog((prevLog) => [...prevLog, { sender, message }]);
  };

  const simulateBotResponse = (userMessage) => {
    let botMessage = "I didn't understand that.";
    if (userMessage.toLowerCase().includes("display bills")) {
      botMessage = "Here are your latest bills: \n1. Bill A \n2. Bill B.";
    } else if (userMessage.toLowerCase().includes("add item")) {
      botMessage = "Please provide the details of the item to add.";
    } else if (userMessage.toLowerCase().includes("help")) {
      botMessage = "Here are some commands you can try: 'Display Bills', 'Add Item', 'Get User Details', 'Update Item', 'Delete Item'.";
    } else if (userMessage.toLowerCase().includes("get user details")) {
      botMessage = "Here are your details: \nName: John Doe \nAccount: #123456";
    } else if (userMessage.toLowerCase().includes("update item")) {
      botMessage = "Please provide the item details you'd like to update.";
    } else if (userMessage.toLowerCase().includes("delete item")) {
      botMessage = "Please specify the item you'd like to delete.";
    } else if (userMessage.toLowerCase().includes("search item")) {
      botMessage = "What item are you searching for?";
    }
    addChatMessage("bot", botMessage);
  };

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toLocaleDateString() : "";
    addChatMessage("user", `Show me bills for ${formattedDate}`);
    simulateBotResponse(`bills for ${formattedDate}`);
  };

  return (
    <div className="chatbot">
      <header className="chatbot-header">
        <h1>Chat with conversoDB</h1>
      </header>

      <div className="chatbot-body">
        <div className="buttons-container">
          <div className="options-panel">
            <h3>Quick Options:</h3>
            <button onClick={() => handleButtonClick("Display Bills")}>Display Bills</button>
            <button onClick={() => handleButtonClick("Add Item")}>Add Item</button>
            <button onClick={() => handleButtonClick("Get User Details")}>Get User Details</button>
            <button onClick={() => handleButtonClick("Update Item")}>Update Item</button>
            <button onClick={() => handleButtonClick("Delete Item")}>Delete Item</button>
            <button onClick={() => handleButtonClick("Search Item")}>Search Item</button>
            <button onClick={() => handleButtonClick("Help")}>Help</button>
          </div>

          {/* Calendar Section */}
          <div className="calendar-section">
            <h3>Select a Date:</h3>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a day"
              className="calendar-input"
            />
          </div>
        </div>

        <div className="chat-display-container">
          <div className="chat-display">
            {chatLog.map((chat, index) => (
              <div
                key={index}
                className={`chat-message ${chat.sender === "user" ? "user" : "bot"}`}
              >
                {chat.message}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={chatInput}
              onChange={handleInputChange}
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
