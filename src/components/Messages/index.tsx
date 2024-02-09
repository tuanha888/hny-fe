import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const Messages = () => {
  const messages = useSelector((state: RootState) => state.message.messages);
  return <div>Messages</div>;
};

export default Messages;
