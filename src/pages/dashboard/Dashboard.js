import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function FetchList() {

  return (
    <>
    <Grid container spacing={1}>
    <Card sx={{minWidth:500, margin:0.5}}>
          <CardContent>
              <Avatar sx={{ bgcolor: deepPurple[500] }} aria-label="recipe">
                  F
              </Avatar>
              <Typography sx={{ marginTop: 5 }} variant="h5" component="div">
                  CARD
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  This card contains FetchList
              </Typography>
              <Typography variant="body2">
                  First Project.
              </Typography>
          </CardContent>
          <CardActions sx={{ ml: 1 }}>
              <Link size="small" to="/fetch-list">GO TO FetchList</Link>
          </CardActions>
      </Card>
      <Card sx={{minWidth:500, margin:0.5}}>
              <CardContent>
                  <Avatar sx={{ bgcolor: deepPurple[500] }} aria-label="recipe">
                      T
                  </Avatar>
                  <Typography sx={{ marginTop: 5 }} variant="h5" component="div">
                      CARD
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      This card contains TODO
                  </Typography>
                  <Typography variant="body2">
                      First Project.
                  </Typography>
              </CardContent>
              <CardActions sx={{ ml: 1 }}>
                  <Link size="small" to="/todo">GO TO Todo</Link>
              </CardActions>
          </Card>
          </Grid>
          </>
  );
}

export default FetchList
