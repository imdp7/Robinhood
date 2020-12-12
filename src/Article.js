import React, { useState, useEffect } from "react";
import SingleArticle from './SingleArticle';
import {news} from "./api";
import axios from "axios";

function Article(props) {
    const [articles, setArticles] = useState([]);
    

    useEffect(() => {
        if (props) {
            return axios.request(news).then(function (response) {
              let data = response.data.items.result;
              let articles = data.slice(0,10);
              setArticles(articles);
            }).catch(function (error) {
              console.error(error);
            });
            }
        },[props]);

    return (
    <div className="newsfeed__articles">
       
            {articles.map(article => (
                <SingleArticle 
                  key={article?.reference_id}
                  image={article.main_image?.original_url}
                  link={article?.link}
                  publisher={article?.publisher}
                  time={article?.published_at}
                  title={article?.title}
                  summary={article?.summary}
                  source={article?.source}
                />
            ))}
    </div>
    );
}
export default Article;