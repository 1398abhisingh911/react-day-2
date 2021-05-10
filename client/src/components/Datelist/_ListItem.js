import React from "react";
import { DaysAgo, Weeks } from "../../constants/Dates";

const ListItem = ({ CurDate, Selected, handleSelectedDayClick, index }) => {
  const today = new Date().getDate();
  return (
    <span
      onClick={() => handleSelectedDayClick(index)}
      className={
        "ListItem list-group-item list-group-item-action" +
        (CurDate === today ? " list-group-item-success" : "") +
        (Selected ? " active" : "")
      }
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">May {CurDate}</h5>
        <small>{DaysAgo(CurDate - today)}</small>
      </div>
      <p className="mb-1">
        {
          Weeks[
            (Weeks.length * 5 + (new Date().getDay() + CurDate - today)) %
              Weeks.length
          ]
        }
      </p>
      <small>And some small print.</small>
    </span>
  );
};

export default ListItem;
