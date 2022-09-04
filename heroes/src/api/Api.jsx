import axios from "axios";
const baseURL = "https://mock-service-worker.herokuapp.com";
const heroesApi = axios.create({ baseURL });
export default heroesApi;
