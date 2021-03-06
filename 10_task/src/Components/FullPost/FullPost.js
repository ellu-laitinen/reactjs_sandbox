import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";
import axios from 'axios';

//npm json-server --port 3001 --watch db.json


const FullPost = () => {
  const [loadedPost, setLoadedpost] = useState();
  let { postId } = useParams();
  useEffect(() => {
    if (!loadedPost) {
      axios.get('http://localhost:3001/posts/' + postId).then(
        (response) => {
          console.log(response.data);
          setLoadedpost(response.data);
        });
    }
  });

  let postData = undefined;
  if (postId) {
    postData = <h1>Loading post</h1>
  }
  if (loadedPost) {
    postData = (
      <div className="fullPost">
        <h1>Post {loadedPost.id}</h1>
        <p>{loadedPost.title}</p>
        <img src={loadedPost.img} alt={loadedPost.title} />
      </div>
    );
  }
  return postData;
};
export default FullPost;
