import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './Cards.css';

const cardData = [
    {
      avatar: 'R',
      title: 'Shrimp and Chorizo Paella',
      subheader: 'September 14, 2016',
      image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
      content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    },
    {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
      {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
      {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
      {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
      {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
      {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
      {
        avatar: 'R',
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        image: 'https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1706871950~exp=1706872550~hmac=58890dd1e762a8c80f5b8fb50c7298c47daa9bb562ac4c66f76d9fb896f6fc9e',
        content: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
        },
    // Add more card data as needed
  ];

function RecipeReviewCard() { 
  
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: '20px' }} className="fade-in-card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {card.avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.title}
            subheader={card.subheader}
          />
          <CardMedia
            component="img"
            height="194"
            image={card.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {card.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            
          </CardActions>
          
        </Card>
      ))}
    </div>

  );
}

export default RecipeReviewCard;
