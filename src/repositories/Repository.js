import axios from "axios";

const baseDomain = "https://worldcup.sfg.io/"
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});