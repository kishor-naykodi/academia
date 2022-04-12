import http from "./httpService";
import { apiUrl } from "../config.json";
import auth from "./authService";

const apiEndPoint = apiUrl + "/classroom";

export function getClassrooms() {
  return http.get(apiEndPoint);
}

export function createClass(newClass) {
  return http.post(apiEndPoint, {
    classname: newClass.classname,
    section: newClass.section,
    subject: newClass.subject,
    author: {
      _id: auth.getCurrentUser()._id,
      name: auth.getCurrentUser().username,
    },
    imgUrl: getImgUrl(),
  });
}

function getImgUrl() {
  function generateRandom(min = 0, max = 5) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  const imgUrls = [
    "https://www.gstatic.com/classroom/themes/img_code.jpg",
    "https://www.gstatic.com/classroom/themes/img_bookclub.jpg",
    "https://gstatic.com/classroom/themes/img_read.jpg",
    "https://gstatic.com/classroom/themes/img_americanfootball.jpg",
    "https://gstatic.com/classroom/themes/img_graduation.jpg",
  ];

  return imgUrls[generateRandom()];
}
