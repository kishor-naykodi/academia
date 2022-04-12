import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndPoint, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
