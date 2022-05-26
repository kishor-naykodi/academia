import http from "./httpService";
import { apiUrl } from "../config.json";

export function createSchedule(schedule) {
  return http.post(apiUrl + "/department/schedule", {
    classname: schedule.classname,
    subject: schedule.subject,
    start_time: schedule.start_time,
    day: schedule.day,
    class_link: schedule.class_link,
    teacher: schedule.teacher,
  });
}

export function getTodaysClasses() {
  const today = new Date();
  let day = today.getDay();
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return http.get(apiUrl + `/department/schedule/${daylist[day]}`);
}
