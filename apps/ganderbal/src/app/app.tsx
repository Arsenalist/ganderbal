import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { getAllNames } from '../identityAPI';
import { Header } from '@moz/ganderbal/ui-shared';
import { formatRating } from '@moz/ganderbal/util-formatters';

import { Route, useHistory } from 'react-router-dom';

import { GanderbalFeatureNameDetail } from '@moz/ganderbal/feature-name-detail';
export function App() {
  const history = useHistory();
  return (
    <>
      <Header />
      <div className="container">
        <div className="game-layout">
          {' '}
          {getAllNames().map((x) => (
            <Card
              key={x.id}
              className="game-card"
              onClick={() => history.push(x.id)}
            >
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <strong>$</strong>
                    {x.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {formatRating(x.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>

      <Route path="/name/:id" component={GanderbalFeatureNameDetail} />


    </>
  );
}

export default App;
