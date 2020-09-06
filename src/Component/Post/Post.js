import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Post = (props) => {
    const classes = useStyles();
    const {title,body,id}=props.post;
    // const postStyle={
    //     border:'1px solid blue',
    //     backgroundColor:'cyan',
    //     margin:'20px',
    //     padding:'20px',
    //     borderRadius:'20px'
    // }
    return (
        <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>Title:{title}</Typography>
            <Typography variant="h5" component="h2">Body:{body}</Typography><br/>
            </CardContent>
            <CardActions>
            <Link to={`/post/${id}`}> <Button variant="contained" color="primary">
        Details {id}
      </Button></Link> 
      </CardActions>
      </Card>
    );
};

export default Post;