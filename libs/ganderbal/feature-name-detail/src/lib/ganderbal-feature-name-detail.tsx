import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useParams } from 'react-router';



export function GanderbalFeatureNameDetail() {
  console.log("i am actually in ganderbal feature name detail")
  const { id } = useParams();
  return (
    <div className='container'>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
