import React, { useState } from "react";
import { useSendBroadcastMutation } from "./adminApi";

const BroadcastForm = () => {
  const [message, setMessage] = useState("");
  const [sendBroadcast] = useSendBroadcastMutation();

  const handleSend = async () => {
    if (!message.trim()) return;
    await sendBroadcast(message);
    alert("Broadcast sent");
    setMessage("");
  };

  return (
    <div className="admin-section">
      <h3>Send Broadcast Message</h3>
      <textarea
        rows={3}
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Enter message for all users..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default BroadcastForm;
