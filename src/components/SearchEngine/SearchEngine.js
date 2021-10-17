import React, { useState, useEffect, createRef } from 'react';
import {Slider, CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const SearchEngine = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    console.log(elRefs);
  }, [places]);

  const price = [
    {
      value: 0,
      label: '0Rs',
    },
    {
      value: 1000,
      label: '1000Rs',
    },
    {
      value: 2000,
      label: '2000Rs',
    },
    {
      value: 5000,
      label: '5000Rs',
    },
  ];
  
  function valuetext(value) {
    return `${value} Rs`;
  }
  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <div className={classes.box}>
          <div className={classes.forms}>
          <Typography variant="h4" className={classes.typo}>Food & Dining around you</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="rating">Price</InputLabel>
            <Slider
              id="rating"
              aria-label="Custom price"
              defaultValue={20}
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              Price={price}
             />
          </FormControl>

          </div>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SearchEngine;
