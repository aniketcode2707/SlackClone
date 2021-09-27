import React, { useRef, useState } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { Button } from "@material-ui/core";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) return false;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <Container>
      <form>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder={
            channelName
              ? `Message #${channelName}`
              : "Select a Room to send message"
          }
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 20px;

  form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  form input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  form button {
    display: none !important;
  }
`;
