import React, { useState, useEffect } from "react";
import SingleArticle from './SingleArticle';
import {news} from "./api";
import axios from "axios";

function Article(props) {
    const [articles, setArticles] = useState([]);
    const [image, setImage] = useState([]);
    

    useEffect(() => {
        if (props) {
            return axios.request(news).then(function (response) {

              let articles = response.data.items.result;
              setArticles(articles);
            }).catch(function (error) {
              console.error(error);
            });
            }
        },[]);

    return (
    <div className="newsfeed__articles">
        
            {articles.map(article => (
                <SingleArticle 
                  key={article.reference_id}
                  //image={article.main_image.original_url}
                  link={article.link}
                  publisher={article.publisher}
                  time={article.published_at}
                  title={article.title}
                  summary={article.summary}
                  source={article.source}
                />
            ))}
    </div>
    );
}
export default Article; 