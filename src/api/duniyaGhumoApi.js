// /* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-key': "815f2575e7msh21bc194b39ed181p1520b9jsn0b5649c077ee",
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-key': "815f2575e7msh21bc194b39ed181p1520b9jsn0b5649c077ee",
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};







// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//   params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
//   headers: {
//     'x-rapidapi-key': '815f2575e7msh21bc194b39ed181p1520b9jsn0b5649c077ee',
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// var options = {
//   method: 'GET',
//   url: 'https://community-open-weather-map.p.rapidapi.com/find',
//   params: {
//     q: 'london',
//     cnt: '0',
//     mode: 'null',
//     lon: '0',
//     type: 'link, accurate',
//     lat: '0',
//     units: 'imperial, metric'
//   },
//   headers: {
//     'x-rapidapi-key': '815f2575e7msh21bc194b39ed181p1520b9jsn0b5649c077ee',
//     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//   params: {query: 'eiffel tower', lang: 'en_IN', units: 'km'},
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '815f2575e7msh21bc194b39ed181p1520b9jsn0b5649c077ee'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });