import React, { useState, useEffect } from "react";
import SingleArticle from './SingleArticle';
import {key,host} from "./api";
import axios from "axios";


const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=";
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

function Article(props) {

    const [articles, setArticles] = useState([]);
    const [videoFeed, setVideoFeed] = useState([]);
    

    // useEffect(async() => {
    //     if (props) {
    //         return axios.request(news).then(function (response) {
    //           let data = response.data.items.result;
    //           let articles = data.slice(0,25);
    //           setArticles(articles);
    //           console.log(articles);
    //         }).catch(function (error) {
    //           console.error(error);
    //         });
    //         }
    //     },[props]);
    useEffect(async () => {
     try {
          const res = await axios
            .request(`${BASE_URL}${props.category}${KEY_URL}`)
            let data = res.data.items.result;
            let articles = data.slice(0,`${props.limit}`);
            setArticles(articles);
            console.log(articles);

        } catch (error) {
          console.error(error);
      }
  },[]);

  useEffect(async () => {
    try {
         const res = await axios
           .request(`${BASE_URL}${props.video}${KEY_URL}`)
           let data = res.data.items.result[0];
           setVideoFeed(data);
       } catch (error) {
         console.error(error);
     }
 },[]);

    return (
    <div className="newsfeed__articles">

      {/* {props.video && (
        <div>

          </div>
      )} */}
       
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
                  ticker={article?.finance}
                  entities={article?.entities}
                />
            ))}
    </div>
    );
}
export default Article;