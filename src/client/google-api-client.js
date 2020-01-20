const axios = require('axios');

const getLocations = ({
  latitude, longitude, type, responseOutput, language, apiKey
}) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/${responseOutput}`
              + `?location=${latitude},${longitude}`
              + `&language=${language}`
              + '&rankby=distance'
              + `&type=${type}`
              + `&key=${apiKey}`;
  return axios.get(url, {
    headers: {
      'cache-control': 'public, max-age=86400'
    }
  }).then((res) => Promise.resolve(res.data))
}

export default { getLocations }
