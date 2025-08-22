// src/components/MessageForm.jsx
import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [messages, setMessages] = useState([]);

  // Load messages from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("loveMessages")) || [];
    setMessages(saved);
  }, []);

  // Save message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;

    const newMsg = { message, id: Date.now() };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("loveMessages", JSON.stringify(updated));

    // Reset form
    setMessage("");
    setEmojiPicker(false);
  };

  // Handle emoji selection
  const onEmojiClick = (event, emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  // Delete a message
  const handleDelete = (id) => {
    const updated = messages.filter((msg) => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("loveMessages", JSON.stringify(updated));
  };

  return (
    <section
      id="message-form"
      className="w-full min-h-screen flex flex-col items-center bg-pink-50 py-20 px-4"
    >
      <h2 className="text-4xl font-romantic text-pink-600 mb-12 drop-shadow-md">
        Leave Me a Love Note 💌
      </h2>

      <form
        className="flex flex-col gap-4 w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >

        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(e);
            }
          }}
          className="border border-pink-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setEmojiPicker(!emojiPicker)}
            className="px-4 py-2 bg-pink-200 rounded-lg hover:bg-pink-300 text-pink-700 font-semibold"
          >
            {emojiPicker ? "Close Emoji" : "Add Emoji"}
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 text-white font-semibold"
          >
            Send
          </button>
        </div>

        {emojiPicker && (
          <div className="mt-2">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </form>

      {/* Display Messages */}
      <div className="mt-12 w-full max-w-xl flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-pink-100 rounded-xl p-4 shadow-md flex justify-between items-start"
          >
            
            <div className="flex-1">
                <p className="text-pink-600">{msg.message}</p>
            </div>

            <button
                onClick={() => handleDelete(msg.id)}
                className="text-grey-500 font-bold hover:text-red-700 ml-4"
                > 
                Ⓧ
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MessageForm;
