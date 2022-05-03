import { Card, CardContent, CardHeader, Skeleton } from '@mui/material';
import React from 'react';

const SkeletonCard = () => {
  return (
    <Card sx={{m: 2}}>
            <CardHeader 
              avatar={
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={
                <Skeleton animation="wave" height={10} width="40%" />
              }
            />
            <CardContent>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </CardContent>

          </Card>
  )
}

export default SkeletonCard;