import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './News.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
  },
  media: {
    height: 300,
   

  },




});

const News = (props) => {
    const {title,description,urlToImage, author,publishedAt,content} = props.article;
    const classes = useStyles();
    return (
        <div className="myNews">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  className="myTitle" gutterBottom variant="h5" component="h1">
        {title}
          </Typography>

          <Typography gutterBottom variant="h8" component="h6">
        {author}
          </Typography>

          <Typography gutterBottom variant="h8" component="h6">
        {publishedAt}
          </Typography>


          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

        </div>
    );
};

export default News;