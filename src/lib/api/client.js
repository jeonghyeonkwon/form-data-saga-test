import axios from "axios";
const client = axios.create();

client.defaults.baseURL = "http://localhost:8000/api";

export default client;
