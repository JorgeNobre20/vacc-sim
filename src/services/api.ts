import axios from "axios";

const api = axios.create({
  baseURL: "your_base_url"
});

export { api };
