import http from "./httpService";
import { apiUrl } from "../config.json";
import auth, { getCurrentUser } from "./authService";
import { nanoid } from "nanoid";

const apiEndPoint = apiUrl + "/classroom";

export async function getClassrooms() {
  const createdClassrooms = await http.get(
    `${apiEndPoint}/created/${getCurrentUser()._id}`
  );
  const studiedClassrooms = await http.get(
    `${apiEndPoint}/studied/${getCurrentUser()._id}`
  );
  const taughtClassrooms = await http.get(
    `${apiEndPoint}/taught/${getCurrentUser()._id}`
  );
  const classrooms = [
    ...studiedClassrooms.data,
    ...createdClassrooms.data,
    ...taughtClassrooms.data,
  ];
  return classrooms;
}

export function getClassroom(id) {
  return http.get(`${apiEndPoint}/${id}`);
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
    code: nanoid(11),
    imgUrl: getImgUrl(),
  });
}

export function joinClass(data) {
  return http.post(apiEndPoint + "/students/register", {
    student: getCurrentUser()._id,
    code: data.classcode,
  });
}

export function addStudent(classId, email) {
  return http.post(apiEndPoint + "/student/add", {
    classId,
    email,
  });
}

export function addTeacher(classId, email) {
  return http.post(apiEndPoint + "/teacher/add", {
    classId,
    email,
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
