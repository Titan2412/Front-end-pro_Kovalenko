import { Grid } from '@mui/material';
import { Card } from './Card.jsx';
import React, { useEffect } from 'react';
import { FETCH_HOTELS_ACTION } from '../../store/Hotels/hotelsAction.js';
import { useDispatch, useSelector } from 'react-redux';

export function List() {
  const dispatch = useDispatch();
  const hotelsState = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(FETCH_HOTELS_ACTION());
  }, [dispatch]);

  return (
    <Grid container spacing={2} justifyContent="center">
      {hotelsState.hotels.map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <Card hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
}
