import React from "react";
import { trendData } from "../../data/trendData";
import "./TrendCard.css";

function TrendCard() {
  return (
    <div className="trendCard">
      <h3>Trends for you</h3>
      {trendData.map((data) => {
        const { id } = data;
        return (
          <div className="trend" key={id}>
            <span>#{data.name}</span>
            <span>{data.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
}

export default TrendCard;
