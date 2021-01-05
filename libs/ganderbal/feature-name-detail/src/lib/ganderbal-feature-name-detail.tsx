import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import './ganderbal-feature-name-detail.spec';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
type TParams = {id:string};

export interface GanderbalFeatureNameDetailProps
  extends RouteComponentProps<TParams> {}

  export const GanderbalFeatureNameDetail = (props: GanderbalFeatureNameDetailProps) => {
  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant = "body2" color="textSecondary" component = "p">
              {props.match.params.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
  };

export default GanderbalFeatureNameDetail;
