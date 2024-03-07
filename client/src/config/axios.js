import axios from "axios";

const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
});

export default clienteAxios;
