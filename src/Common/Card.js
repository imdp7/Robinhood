import React,{useState} from 'react'
import 'tw-elements';

function Card({card}) {

    const [flip,setFlip ] = useState(true);


  return (
    <div>
        <div className={`${flip && "flip-vertical transform"} rounded-xl relative  justify-center flex h-13/4 w- md:w-full flex-wrap snap-center p-2 cursor-pointer`} onClick={() => setFlip(!flip)}>
            {flip ? 
        <img
        src= {`${card?.src}`}
        className= "w-96 h-auto p-2 rounded-xl opacity-75 object-contain"
        alt={card.title}
      />
      : 
      <div
        className= " w-full h-full rounded-xl bg-white"
      > 
      <div className="flex flex-row w-96 h-full">
      <div className="flex flex-col p-2">
            <span className="md:text-left text-gray-700 text-2xl lg:text-2xl">{card?.header}</span>
            <span className="md:text-left text-gray-700 text-lg lg:text-xl">{card?.body}</span>
            <span className="md:text-left text-gray-700 text-lg lg:text-xl">{card?.body2}</span>
            </div>
        </div>   
        </div>   
        }
      
      
        {flip ? <div className='flex fixed flex-wrap bg-white bg-opacity-40 m-2 p-3 text-center top-5 rounded-lg w-4/5'>
          <span class="flex flex-wrap text-center text-md md:text-lg lg:text-xl text-gray-800 md:text-left">{card?.title}</span>
          </div>
        : 
        null
        }
    </div>
    </div>
  )
}

export default Card