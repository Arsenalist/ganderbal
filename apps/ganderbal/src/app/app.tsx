import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getAllNames } from '../identityAPI';
import { Header } from '@moz/ganderbal/ui-shared';
import { formatRating } from '@moz/ganderbal/util-formatters';
import axios from 'axios'
import * as express from 'express';
import { useHistory } from 'react-router-dom';

import { GanderbalFeatureNameDetail } from '@moz/ganderbal/feature-name-detail';
export function App() {

  const history = useHistory();
  const [occupations, setOccupations] = useState([]);
  useEffect(() => {
    axios.get('/api/names').then(response => {
      setOccupations(response.data)
    })
  }, []);
  const nameClickHandler = (id) => {
    console.log("the id i am passing is ", id)
    history.push(`/name/${id}`);
  }
  return (
    <Router>
      <Header />
      <div className="game-layout">
        {
        occupations.map((x)  => {

          return (
            <Card
              key={x.id}
              className='game-card'
              onClick={(e) => nameClickHandler(x.id)}
            >
              <CardActionArea>
                <CardMedia
                  className='game-card-media'
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {x.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {x.description}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    <strong>$</strong>
                    {x.price}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    className='game-rating'
                  >
                    <strong>Rating:</strong> {formatRating(x.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
      <Switch>
      <Route exact path="/name/:id" component={ GanderbalFeatureNameDetail} />
      </Switch>
      </Router>
  );
}

export default App;
