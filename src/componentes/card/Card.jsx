import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./card.css";

export default function CardItem() {
  return (
    <Card sx={{ maxWidth: 850}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image="./assets/85a94aa5ff7043eabeb99b87b36448-barbearia-hermanos-freguesia-d-biz-photo-79b664adccae4784a7ec0fdf21457e-booksy.jpeg"
      />

    </Card>
  );
}