import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const PostDetail = (props) => {
    const classes = useStyles();
    const{postID}=useParams();
    const [post,setPost]= useState({});

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postID}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[])
    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">UserId: {post.userId}</Typography>
            <Typography gutterBottom variant="h5" component="h2">Post No: {postID}</Typography>
            <h3>Title: {post.title}</h3>
            <Typography variant="body2" color="textSecondary" component="p">Body: {post.body}</Typography>
           
            <center>
                <h3>Comments</h3>
                <Comments></Comments>
            </center>
            </CardContent>
            </CardActionArea>

            </Card>
    );
};

export default PostDetail;