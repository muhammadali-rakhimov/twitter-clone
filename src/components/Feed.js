import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../styles/Feed.css";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

// <Post
//   displayName="Muhammadali"
//   username="UzbMuhammadali"
//   verified={true}
//   text="Yeah it is!!!(Yii)"
//   avatar="https://muhammadaliy.uz/img/p-sharpen-small.jpg"
//   image="https://www.google.com/logos/doodles/2018/uzbekistan-national-day-2018-4807215004254208-2xa.gif"
// />
// <Post
//   displayName="Muhammadali"
//   username="UzbMuhammadali"
//   verified={true}
//   text="Yeah it is!!!(Yii)"
//   avatar="https://muhammadaliy.uz/img/p-sharpen-small.jpg"
//   image="https://media0.giphy.com/media/mf8UbIDew7e8g/200.gif"
// />
