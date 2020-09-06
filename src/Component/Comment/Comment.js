import React from 'react';

const Comment = (props) => {
    const {name , email , body} = props.comment;
    return (
        <div>
            <h2>UserName:{name}</h2>
            <p><small>email: {email}</small></p>
            <p>Comment:{body}</p>

        </div>
    );
};

export default Comment;