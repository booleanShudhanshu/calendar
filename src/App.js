import logo from "./logo.svg";
import "./App.css";
import Monthview from "./monthview";
import { useState } from "react";
import Weekview from "./weekview";
import Dayview from "./dayview";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [view, setView] = useState("day");
  const [startOfWeek, setStartOfWeek] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [date, setDateVal] = useState(new Date());
  function getPrevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }
  function getNextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }
  const ENUM_VIEW = {
    month: <Monthview month={month} year={year} />,
    week: (
      <Weekview startOfWeek={startOfWeek} setStartOfWeek={setStartOfWeek} />
    ),
    day: <Dayview date={date} />,
  };

  function prevDay() {
    let currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    setDateVal(currentDate);
  }

  function nextDay() {
    let currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    setDateVal(currentDate);
  }

  const prevWeek = () => {
    let temp = new Date(startOfWeek);
    let prevDate = new Date(temp.setDate(temp.getDate() - 7));
    if (prevDate.getFullYear() < temp.getFullYear()) {
      setStartOfWeek(new Date(temp.getFullYear() - 1, 11, 31 - 6));
      setMonth(11);
      setYear(temp.getFullYear() - 1);
    } else {
      setStartOfWeek(prevDate);
      setMonth(prevDate.getMonth());
      setYear(prevDate.getFullYear());
    }
  };
  const nextWeek = () => {
    let temp = new Date(startOfWeek);
    let nextDate = new Date(temp.setDate(temp.getDate() + 7));
    if (nextDate.getFullYear() > temp.getFullYear()) {
      setStartOfWeek(new Date(temp.getFullYear() + 1, 0, 1));
      setMonth(0);
      setYear(temp.getFullYear() + 1);
    } else {
      setStartOfWeek(nextDate);
      setMonth(nextDate.getMonth());
      setYear(nextDate.getFullYear());
    }
  };
  const handleNext = () => {
    if (view === "month") getNextMonth();
    else if (view === "week") nextWeek();
    else if (view === "day") nextDay();
  };
  const handlePrev = () => {
    if (view === "month") getPrevMonth();
    else if (view === "week") prevWeek();
    else if (view === "day") prevDay();
  };
  const handleViewChange = (val) => {
    setView(val);
    setStartOfWeek(new Date());
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
    setDateVal(new Date());
  };
  const getHeader = () => {
    if (view === "day") {
      return `${date.getDate()}  ${months[month]}, ${year}`;
    } else if (view === "week") {
      return getWeekDates(date);
    } else if (view === "month") {
      return `${months[month]}, ${year}`;
    }
  };
  function getWeekDates(date) {
    let weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay());
    let weekEnd = new Date(date);
    weekEnd.setDate(date.getDate() - date.getDay() + 6);
    return [
      `${weekStart.getDate()}  ${months[weekStart.getMonth()]} -
      ${weekEnd.getDate()}  ${months[weekEnd.getMonth()]}`,
    ];
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row gx-0">
        <div className="col-12">
          <div className="">
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex align-items-center w-25 gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    setMonth(new Date().getMonth());
                    setYear(new Date().getFullYear());
                    setStartOfWeek(new Date());
                  }}
                >
                  Today
                </button>
                <div className="d-flex ">
                  <button
                    className="btn btn-sm btn-text-secondary"
                    onClick={handlePrev}
                  >
                    &lt;
                  </button>
                  <button
                    className="btn btn-sm btn-text-secondary"
                    onClick={handleNext}
                  >
                    &gt;
                  </button>
                </div>
                <h4 className="pl-2 mb-0">{getHeader()}</h4>
              </div>
              <div className="d-flex w-50 justify-content-center align-items-center">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      view !== "day" ? "btn-outline-secondary" : "btn-secondary"
                    }`}
                    onClick={() => handleViewChange("day")}
                  >
                    Day
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      view !== "week"
                        ? "btn-outline-secondary"
                        : "btn-secondary"
                    }`}
                    onClick={() => handleViewChange("week")}
                  >
                    Week
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      view !== "month"
                        ? "btn-outline-secondary"
                        : "btn-secondary"
                    }`}
                    onClick={() => handleViewChange("month")}
                  >
                    Month
                  </button>
                </div>
              </div>
            </div>
            {ENUM_VIEW[view]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
