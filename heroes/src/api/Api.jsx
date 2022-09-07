import axios from "axios";
const baseURL = "https://app-heroes-heroku.herokuapp.com";
const heroesApi = axios.create({ baseURL });
export default heroesApi;
