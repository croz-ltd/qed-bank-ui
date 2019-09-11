import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import errorImg from '../../static/images/error.png';
import useErrorCardStyle from './useErrorCardStyle';

export default function ErrorCard({title, message}) {
  const classes = useErrorCardStyle();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={errorImg} title="Sad polar bear"/>
      <CardContent>
        <Typography gutterBottom variant="h4">{title}</Typography>
        <Typography component="p">{message}</Typography>
      </CardContent>
    </Card>
  );
}
