import React from "react";
import ListItem from "./_ListItem";

const List = ({ WeatherAppContents, SelectedDay, handleSelectedDayClick }) => {
  return (
    <div className="List">
      <div class="List list-group">
        {WeatherAppContents.map((curr, key) => (
          <ListItem
            CurDate={curr.Date}
            key={key}
            index={key}
            Selected={+SelectedDay === key}
            handleSelectedDayClick={handleSelectedDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
