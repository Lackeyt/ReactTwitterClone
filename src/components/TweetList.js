import React from "react";
import Tweet from "./Tweet";

const masterTweetList = [
  {
    tweetText: "Blah blah blah here's my latest tweet",
    userName: "Tyson"
  },
  {
    tweetText: "Tweet text for Kevin's vacation",
    userName: "Kevin"
  },
  {
    tweetText: "Blah blah blah here's my latest tweet",
    userName: "Sean"
  },
  {
    tweetText: "Blah blah blah here's my latest tweet",
    userName: "Clara"
  },
  {
    tweetText: "Blah blah blah here's my latest tweet",
    userName: "Bob"
  },
  {
    tweetText: "Blah blah blah here's my latest tweet",
    userName: "Stacy"
  },
  {
    tweetText: "Blah blah blah here's my latest tweet",
    userName: "Jim"
  }
]

function TweetList(){
  return (
    <React.Fragment>
      <hr />
      {masterTweetList.map((tweet, index) =>
        <Tweet tweetText={tweet.tweetText}
          userName={tweet.userName}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default TweetList;