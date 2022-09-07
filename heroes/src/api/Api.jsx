import axios from "axios";
// const baseURL = "https://mock-service-worker.herokuapp.com";
const baseURL = "http://localhost:4000";
const heroesApi = axios.create({ baseURL });
export default heroesApi;
