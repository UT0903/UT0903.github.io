import axios from "axios";
import { useContext } from "react";
import AuthContext from "./AuthContext";
const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  //timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
//export default instance;
const myaxios = {
  get: async (...args) => {
    try {
      return { err: false, res: await instance.get(...args) };
    } catch (err) {
      return { err: true, res: err };
    }
  },
  post: async (...args) => {
    try {
      return { err: false, res: await instance.post(...args) };
    } catch (err) {
      return { err: true, res: err };
    }
  },
};
export default myaxios;
