import React from 'react'
import "./Feed.css";
import Post from "./Post"
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import db from './Firebase';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://qph.cf2.quoracdn.net/main-thumb-210482420-200-pdhwizorgqaadhrimazsmrpkuhhueecd.jpeg"
                image="https://mir-s3-cdn-cf.behance.net/projects/404/8de928102350653.Y3JvcCwyNDgxLDE5NDAsMCw2NjM.jpg"
                username="vivek thapa"
                timestamp="this is timestamp"
                message="hello"
            />

        </div>
    )
}

export default Feed;