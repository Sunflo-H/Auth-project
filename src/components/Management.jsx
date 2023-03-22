import React from "react";
import Card from "./Card";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function Management() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <ul className="ul">
        {/* {arr.map((item, i) => (
        <Card key={i} />
      ))} */}
        <Card />
      </ul>
      <div style={{ display: "flex" }}>
        <div>
          <MdOutlineKeyboardDoubleArrowLeft />
        </div>
        <div>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div>1 2 3 4 5</div>
        <div>
          <MdOutlineKeyboardArrowRight />
        </div>
        <div>
          <MdOutlineKeyboardDoubleArrowRight />
        </div>
      </div>
    </>
  );
}
