import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from "../Comment/Comment"

const Comments = () => {
    const [comments,setComments]= useState([]);
    const {postID} = useParams()
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postID}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data));

    },[])
    
    return (
        <div>
            {comments.map((comment) => (
                <Comment comment={comment}></Comment>
            ))}

        </div>
    );
};

export default Comments;