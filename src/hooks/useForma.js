import { useCallback, useRef, useState } from "react";

export const useMessage = () => {
  const ref = useRef(null);
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text,
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  };

  const resetForm = () => {
    setValue("");
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    sendMessage("user", value);
    resetForm();
  };

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

  const focus = (event) => {
    event.preventDefault();
    ref.current.focus();
  };

  //useCallback(() => ref.current.focus(), []);

  return [
    messageList,
    value,
    ref,
    {
      onSubmitMessage,
      onChangeMessageInput,
      sendMessage,
      focus,
    },
  ];
};
