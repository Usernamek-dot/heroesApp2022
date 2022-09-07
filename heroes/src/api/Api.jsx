import axios from "axios";
const baseURL = "http://localhost:4000";
const heroesApi = axios.create({ baseURL });
export default heroesApi;
