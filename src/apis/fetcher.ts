import axios from "axios";


const HOST="https://6875a90f814c0dfa653914a4.mockapi.io/verdhn/antoree/api"

export const instance = axios.create({
  baseURL:HOST
});
