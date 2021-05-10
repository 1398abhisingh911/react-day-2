import React from "react";
import ListItem from "./_ListItem";

const List = ({ WeatherAppContents }) => {
  return (
    <div className="List">
      <div class="List list-group">
        {WeatherAppContents.map((curr, key) => (
          <ListItem CurDate={curr.Date} key={key} />
        ))}
      </div>
    </div>
  );
};

export default List;
