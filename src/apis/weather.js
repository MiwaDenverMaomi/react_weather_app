import axios from 'axios';

const KEY = "3a3596adcd5b4a7b8d3180955212012";
export default axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: KEY
  }
});
