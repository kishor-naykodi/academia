import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/users";

export function userInfo(id) {
  return http.get(`${apiEndPoint}/${id}`);
}

export function me() {
  return http.get(apiEndPoint + "/me");
}

export function register(user) {
  return http.post(apiEndPoint, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
