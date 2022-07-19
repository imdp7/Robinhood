import React,{useState,useEffect} from 'react';
import {key, host} from "./api";
import { Link,useHistory } from 'react-router-dom';
import axios from "axios";
import './Stats.css'
import Progress from './Progress';
import ChatDropdown from './ChatDropdown';

function Chat({match}) {

const GET_QUOTE = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?symbols='
const CHAT = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/conversations/list?userActivity=true&sortBy=createdAt&symbol='
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

    const [quote,setQuote] = useState([]);
    const [chat,setChat] = useState([]);

    useEffect(async () => {
      if (match) {
          try {
          const res = await axios
            .request(`${GET_QUOTE}${match.params.name}${KEY_URL}`);
          let quote = res.data.quoteResponse?.result[0]?.messageBoardId;
          setQuote(quote);
          console.log(quote)
        } catch (error) {
          console.error("Error", error.message);
        }
          }
      },[match,KEY_URL]);

  useEffect(async () => {
      if (match) {
          try {
          const res = await axios
            .request(`${CHAT}${match.params.name}&messageBoardId=${quote}${KEY_URL}`);
          let chat = res.data;
          setChat(chat);
          console.log(chat)
        } catch (error) {
          console.error("Error", error.message);
        }
          }
      },[match,KEY_URL,quote]);

      const chats = chat?.canvassMessages

      const history = useHistory()

      
  return (
      <div className='p-2 m-2'>

        <div> 
          {match.params.name && ( 
            <div>
        <span onClick={() => history.goBack()} className='cursor-pointer underline font-base text-xl sm:text-sm'>Go Back</span>
        <div className="newsfeed__popularlists__intro">
        <span className="list__title">{match.params.name} Conversation</span>
        <ChatDropdown/>
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
       
  </div>
  );
}
export default Chat;
