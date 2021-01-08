import React, { useState } from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      displayName: "Muhammad Ali",
      username: "UzbMuhammadali",
      verified: true,
      text: tweetMessage,
      avatar: "https://muhammadaliy.uz/img/p-sharpen-small.jpg",
      image: "https://muhammadaliy.uz/img/p-sharpen-small.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://muhammadaliy.uz/img/p-sharpen-small.jpg" />
          <input
            value={tweetMessage}
            onChange={(event) => setTweetMessage(event.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(event) => setTweetImage(event.target.value)}
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
