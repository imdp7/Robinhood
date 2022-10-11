/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import {key, host} from "./api";
import { Link,useHistory } from 'react-router-dom';
import axios from "axios";
import './Stats.css'
import Progress from './Progress';
import ChatDropdown from './ChatDropdown';
import Pagination from './Components/pagination';

function Chat({match}) {

  const GET_QUOTE = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?symbols='
  const CHAT = 'https://yh-finance.p.rapidapi.com/conversations/list?userActivity=true&sortBy=createdAt&symbol='
  const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=yh-finance.p.rapidapi.com`

    const [quote,setQuote] = useState([]);
    const [chat,setChat] = useState([]);


    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0)


    useEffect(async() => {
      if (match) {
          try {
          const res = await axios
            .request(`${GET_QUOTE}${match.params.name}${KEY_URL}`);
          let quotes = res.data?.quoteResponse?.result[0]?.messageBoardId;
          setQuote(quotes);
        } catch (error) {
          console.error("Error", error.message);
        }
          }
      },[match,KEY_URL]);

  useEffect(async() => {
      if (match) {
          try {
          const res = await axios
            .request(`${CHAT}${match.params.name}&messageBoardId=${quote}${KEY_URL}`);
          let chat = res.data;
          setChat(chat);
        } catch (error) {
          console.error("Error", error.message);
        }
          }
      },[match,KEY_URL,quote]);



      const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };


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
        <>
        <Pagination />
        </>
        </div>
        : <Progress/>} 
  </div>
  );
}
export default Chat;
