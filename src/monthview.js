import React, { useEffect, useState } from "react";
import "./styles.css";
const Monthview = ({ month, year }) => {
  useEffect(() => {
    populateCalendar(year, month);
  }, [month, year]);

  function populateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, daysInMonth).getDay();

    const tbody = document.querySelector(".calendar tbody");
    tbody.innerHTML = "";

    let date = 1;
    let prevMonthDays = new Date(year, month, 0).getDate();
    let nextMonthDate = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        if (i === 0 && j < firstDay) {
          cell.innerHTML = prevMonthDays - firstDay + j + 1;
          cell.classList.add("text-muted");
        } else if (date > daysInMonth) {
          cell.innerHTML = nextMonthDate;
          nextMonthDate++;
          cell.classList.add("text-muted");
        } else {
          cell.innerHTML = date;
          date++;
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
  }

  function getCalendarRows(month, year) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysInWeek = 7; // Assuming a 7-day week

    const daysToDisplay =
      daysInMonth +
      firstDayOfMonth.getDay() +
      (daysInWeek - lastDayOfMonth.getDay() - 1);
    const rowsNeeded = Math.ceil(daysToDisplay / daysInWeek);

    return rowsNeeded;
  }

  return (
    <div class="table-responsive">
      <div class="calendar">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Monthview;
