import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { value, days, onChange } = props;

  const dayList = days.map((item) => {
    return (
      <DayListItem
        key={item.id}
        name={item.name}
        spots={item.spots}
        selected={item.name === value}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{dayList}</ul>;
}
