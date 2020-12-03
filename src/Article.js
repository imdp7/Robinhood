import React, { useState, useEffect } from "react";
import SingleArticle from './SingleArticle';
import {key} from "./api";
import axios from "axios";

const KEY_URL = `&token=${key}`;
function Article(props) {
    const [articles, setArticles] = useState([]);
   
    useEffect(() => {
        if (props) {
            return axios
              .get(`https://finnhub.io/api/v1/news?category=general${KEY_URL}`)
              .then((res) => {
                let articles = res.data;
                  setArticles(articles);
                  console.log(articles);
                })
              .catch((error) => {
                console.error("Error", error.message);
              });
            }
        },[]);

    return (
    <div className="newsfeed__articles">
        
            {articles.map(article => (
                <SingleArticle article={article} key={article.id}/>
            ))
            }
        
    </div>
    );
}
export default Article; 