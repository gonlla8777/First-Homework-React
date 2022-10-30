import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const Todo = () => {
    return (
        <Card sx={{ maxWidth:300}}>
          <CardContent>
            <Typography sx={{marginTop:1 }} variant="h5" component="div">
              CARD 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This card contains TODO
            </Typography>
            <Typography variant="body2">
              First Project.
            </Typography>
          </CardContent>
          <CardActions sx={{ml:1}}>
            <Link  size="small" to="/">GO TO Dashboard</Link>
          </CardActions>
        </Card>
      );
}

export default Todo;