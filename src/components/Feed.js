import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";

function Feed() {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "post");

  const getPostList = async () => {
    try {
      const data = await getDocs(postCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData);
      alert(postList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender getPostList={getPostList} />

      {postList.map((post) => (
        <Post
          profilePic="https://qph.cf2.quoracdn.net/main-thumb-210482420-200-pdhwizorgqaadhrimazsmrpkuhhueecd.jpeg"
          image={post.image}
          username="vivek thapa"
          timestamp="this is timestamp"
          message={post.status}
        />
      ))}

      <Post
        profilePic="https://qph.cf2.quoracdn.net/main-thumb-210482420-200-pdhwizorgqaadhrimazsmrpkuhhueecd.jpeg"
        image="https://mir-s3-cdn-cf.behance.net/projects/404/8de928102350653.Y3JvcCwyNDgxLDE5NDAsMCw2NjM.jpg"
        username="vivek thapa"
        timestamp="this is timestamp"
        message="hello"
      />
    </div>
  );
}

export default Feed;
