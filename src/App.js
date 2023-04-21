import logo from "./logo.svg";
import "./App.css";
import Monthview from "./monthview";
import { useState } from "react";
import Weekview from "./weekview";
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
  const [view, setView] = useState("week");
  const [startOfWeek, setStartOfWeek] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
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
  };

  function prevWeek() {
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
  }
  function nextWeek() {
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
  }
  const handleNext = () => {
    if (view === "month") getNextMonth();
    else if (view === "week") nextWeek();
  };
  const handlePrev = () => {
    if (view === "month") getPrevMonth();
    else if (view === "week") prevWeek();
  };
  return (
    <div class="container-fluid mt-5">
      <div class="row gx-0">
        <div class="col-12">
          <div className="">
            <div class="d-flex align-items-center mb-3 gap-2">
              <button
                class="btn btn-sm btn-outline-secondary"
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
                  class="btn btn-sm btn-text-secondary"
                  onClick={handlePrev}
                >
                  &lt;
                </button>
                <button
                  class="btn btn-sm btn-text-secondary"
                  onClick={handleNext}
                >
                  &gt;
                </button>
              </div>
              <h4 className="pl-2 mb-0">
                {months[month]}, {year}
              </h4>
            </div>
            {ENUM_VIEW[view]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
