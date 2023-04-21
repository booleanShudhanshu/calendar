import React, { useEffect } from "react";
import "./weekview.css";
const Weekview = ({ startOfWeek }) => {
  useEffect(() => {
    startOfWeek && populateCalendar(startOfWeek);
  }, [startOfWeek]);
  function populateCalendar(date) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date(date);
    let startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + 1
    );

    for (let i = 1; i <= 7; i++) {
      let date = new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() + i - 1
      );
      document.getElementById("day" + i).innerHTML =
        daysOfWeek[date.getDay()] +
        " " +
        date.getDate() +
        "/" +
        date.getMonth();
    }
  }
  const data = [
    "7 am",
    "8 am",
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
    "8 pm",
    "9 pm",
    "10 pm",
    "11 pm",
  ];
  return (
    <div class="">
      <table class="table table-bordered calendar-1">
        <thead>
          <tr>
            <th></th>
            <th id="day1">Sunday</th>
            <th id="day2">Monday</th>
            <th id="day3">Tuesday</th>
            <th id="day4">Wednesday</th>
            <th id="day5">Thursday</th>
            <th id="day6">Friday</th>
            <th id="day7">Saturday</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => (
            <tr key={ele}>
              <td style={{ border: "0px" }}>{ele}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Weekview;
