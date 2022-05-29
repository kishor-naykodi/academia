import http from "./httpService";
import { apiUrl } from "../config.json";
import auth from "./authService";

export function createResource(resource) {
  return http.post(apiUrl + "/resource/create", {
    title: resource.title,
    description: resource.description,
    link: resource.link,
    imgUrl: resource.imgUrl,
    author: {
      _id: auth.getCurrentUser()._id,
      name: auth.getCurrentUser().username,
    },
  });
}

export function getResources() {
  return http.get(apiUrl + "/resource");
}
