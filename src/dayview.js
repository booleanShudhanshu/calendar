import React from "react";

const Dayview = ({ date }) => {
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
    <div>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: "center" }}>Time</th>
            <th style={{ textAlign: "center" }}>Event</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => (
            <tr key={ele}>
              <td
                style={{
                  width: "10%",
                  textAlign: "center",
                  height: "60px",
                }}
              >
                {ele}
              </td>
              <td style={{ textAlign: "center" }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dayview;
