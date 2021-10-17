import React, {useState, useEffect } from 'react'
import { CssBaseline, Grid} from '@material-ui/core'

import Header from './components/Header/Header'
import SearchEngine from './components/SearchEngine/SearchEngine'
import Map from './components/Map/Map'
import { getPlacesData, getWeatherData } from './api/duniyaGhumoApi';
const App = () => {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
  
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);
  
    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);
  
    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      });
    }, []);
  
    useEffect(() => {
      const filtered = places.filter((place) => Number(place.rating) > rating);
  
      setFilteredPlaces(filtered);
    }, [rating]);
  
    useEffect(() => {
      if (bounds) {
        setIsLoading(true);
  
        getWeatherData(coords.lat, coords.lng)
          .then((data) => setWeatherData(data));
  
        getPlacesData(type, bounds.sw, bounds.ne)
          .then((data) => {
            setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
            setFilteredPlaces([]);
            setRating('');
            setIsLoading(false);
          });
      }
    }, [bounds, type]);
  
    const onLoad = (autoC) => setAutocomplete(autoC);
  
    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
  
      setCoords({ lat, lng });
    };
  
    return (
      <>
        <CssBaseline />
        <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
        <Grid container spacing={6} style={{ width: '100%' }}>
          {/* <div style={{ display: 'flex'}}> */}
            {/* </div> */}
          <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              weatherData={weatherData}
              />
            <div style={{ display: 'flex', justifyContent: 'center',textAlign: 'center',width: '50%' }}>
              <h1>
              THE CONTENT HERE
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <SearchEngine
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              />
          </Grid>
        </Grid>
      </>
    );
    }
export default App;
