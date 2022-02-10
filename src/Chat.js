import React,{useState,useEffect} from 'react';
import {key, host} from "./api";
import { Link,useHistory } from 'react-router-dom';
import axios from "axios";
import './Stats.css'
import Progress from './Progress';

function Chat({match}) {

const GET_QUOTE = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?symbols='
const CHAT = 'https://yh-finance.p.rapidapi.com/conversations/list?userActivity=true&sortBy=createdAt&symbol='
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

    const [quote,setQuote] = useState([]);
    const [chat,setChat] = useState([]);

    useEffect(() => {
      if (match) {
          return axios
            .request(`${GET_QUOTE}${match.params.name}${KEY_URL}`)
            .then((res) => {
              let quote = res.data.quoteResponse.result[0].messageBoardId;
              setQuote(quote);
              })
            .catch((error) => {
              console.error("Error", error.message);
            });
          }
      },[match,KEY_URL]);

  useEffect(() => {
      if (match) {
          return axios
            .request(`${CHAT}${match.params.name}&messageBoardId=${quote}${KEY_URL}`)
            .then((res) => {
              let chat = res.data;
              setChat(chat);
              
              })
            .catch((error) => {
              console.error("Error", error.message);
            });
          }
      },[match,KEY_URL,quote]);

      const chats = chat?.canvassMessages

      const history = useHistory()

      
  return (
      <div className='p-2 m-2'>
        {chat ? 
        <div> 
          {match.params.name && ( 
            <div>
        <span onClick={() => history.goBack()} className='cursor-pointer underline font-base text-xl sm:text-sm'>Go Back</span>
        <div className="newsfeed__popularlists__intro">
        <span className="list__title">{match.params.name} Conversation</span>
        </div>
        </div>
          )}
        {chats?.map(cha => (
           <div className="single">
        
           <div className='newsfeed__articles__header'>     
               <div className="newsfeed__article__title">
               <div className='header__article'>
               
               </div>
               
               <div className="newsfeed__article__headline">
                    <p>{cha?.meta?.author?.nickname}</p>
                    
               </div>  
           </div>
       
           <div className="newsfeed__article__content">
               <div className="newsfeed__article__paragraph">
                   <p>
                   {cha?.details?.userText}
                   </p>
               </div>
               <img src={cha?.meta?.author?.image?.url} width="105" height="65" alt='user-chat'/>
           </div>   
           </div>
           </div>
        ))}
        </div>
        : <Progress/>}
  </div>
  );
}
export default Chat;
