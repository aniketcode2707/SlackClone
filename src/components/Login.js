import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../config/firebase";

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <Container>
      <LoginInnerContainer>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtarQ2gDgWaj8EwW6ma2S32IYQ1eUMY6Y4lwZgle3RkU9KR8HGZrrsC1xWiMQ2nuLrA4&usqp=CAU"
          alt="slack-logo"
        />
        <h1>Sign in to Slack</h1>
        <p>slack.clone.com</p>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
