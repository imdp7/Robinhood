import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import Article from "./Article";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LineGraph from "./LineGraph";
import Chip from '@material-ui/core/Chip';
import TimeLine from './TimeLine'


function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "100 Most Popular",
    "Top Movers",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
    "Consumer Goods",
    "Food & Drink",
    "Energy & Water",
  ]);

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1 className="price"> $10,14,656.84</h1>
            <div className="price__change">
            <div>
            <span className="price__datas"> $10542.90 (-0.12%)</span>
            <span className="price__date">Today</span>
            </div>
            <div className="price__div">
            <span className="price__datas"> $4022.90 (+5.12%)</span>
            <span className="price__date">After hours</span>
            </div>
            </div>
          </div>
          <div className="newsfeed__chart">
            <LineGraph className="chart"/>
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <span> Buying Power</span>
          <span> $14,034.11</span>
        </div>
        {/* <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets Closed</p>
            <h1> Happy Thanksgiving</h1>
          </div>
        </div> */}
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <span className="list__title">Popular lists</span>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <div className="category__list">
              <Chip 
                className="topic__badge"
                variant="outlined"
                label={topic}
                key={topic}
                avatar={<Avatar
                  src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  outlined={topic}
                />} 
              />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Article />
          </div>
      </div>
    </div>
  );
}

export default Newsfeed;