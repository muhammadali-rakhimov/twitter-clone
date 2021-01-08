import React from "react";
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1347360477022724100"} />
        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="dubaimarinayachtclub"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/dubaimarinayachtclub"}
          options={{
            text: "#dubaimarinayachtclub #dubaimarina",
            via: "dubaimarinayachtclub",
          }}
        /> */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
