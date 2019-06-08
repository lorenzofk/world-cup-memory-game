import axios from "axios";

//TODO Put this URL in a separated file
const baseDomain = "https://world-cup-json-2018.herokuapp.com/";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});