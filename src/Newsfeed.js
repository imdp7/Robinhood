import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import Article from "./Article";
import { Avatar } from "@material-ui/core";
import LineGraph from "./LineGraph";
import Chip from '@material-ui/core/Chip';
import TimeLine from './TimeLine'
import Footer from './Footer'
import TopMovers from "./TopMovers";


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
            <h1 className="price"> $101,46,56.84</h1>
            <div className="price__change">
            <div>
            <span className="price__datas"> $105,42.90 (-0.12%)</span>
            <span className="price__date">Today</span>
            </div>
            <div className="price__div">
            <span className="price__datas"> $4,022.90 (+5.12%)</span>
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
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets Updates</p>
            <h2> Refer and earn a free AAPLE or FACEBOOK stock </h2>
          </div>
        </div>
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
                variant="default"
                color='primary'
                clickable
                label={topic}
                key={topic.id}
                avatar={<Avatar
                  src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  outlined={topic}
                />} 
              />
              </div>
            ))}
          </div>
        </div>
        <div className="newsfeed__topmovers__section"> 
        
        <div className="newsfeed__popularlists__intro">
            <span className="list__title">Trending Today</span>
            <p>Show More</p>
          </div>
          <TopMovers />

        </div>
        <div className="newsfeed__popularlists__intro">
            <span className="list__title">News</span>
            
          </div>
        <div>
          <Article />
          </div>
      </div>
      <div className='newsfeed__topmovers__section'>
      <Footer/>
      </div>
    </div>
  );
}

export default Newsfeed;