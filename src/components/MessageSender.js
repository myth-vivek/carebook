import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import "./MessageSender.css";
import VideoCamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { db } from "./Firebase";
import { getDocs,collection, addDoc } from "firebase/firestore";
import { storage } from "./Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function MessageSender(getPostList) {
  const [newStatus, setStatus] = useState("");
  const [newImage, setNewImage] = useState(null);

  const postCollectionRef = collection(db, "post"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${newImage.name + v4()}`)
    try{
        // if (newImage == null) return console.log("no image");
        uploadBytes(imageRef, newImage).then((data) => {
            getDownloadURL(data.ref).then(val => {
              setNewImage(val)
              alert("val"+newImage)
            })
            alert("current state" + newImage)
        })
        await addDoc(postCollectionRef, {status: newStatus, image: newImage})
        
        getPostList.getPostList()
        
    } catch(err){
        console.log(err)
    }
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            value={newStatus}
            onChange={(e) => setStatus(e.target.value)}
            className="messageSender__input"
            placeholder={"Whats on your mind?"}
          />

          <input
            type="file"
            //value={newImage}
            onChange={(e) => setNewImage(e.target.files[0])}
            placeholder="image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSneder__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSneder__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSneder__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
