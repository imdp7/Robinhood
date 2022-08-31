import React,{useState} from 'react'
import 'tw-elements';

function Card({card}) {

    const [flip,setFlip ] = useState(true);


  return (
    <div>
        <div className={`${flip && "flip-vertical transform"} relative justify-start flex w-full h-full md:w-full snap-center p-2`} onClick={() => setFlip(!flip)}>
            {flip ? 
        <img
        src= {`${card?.src}`}
        className= "w-96 h-full rounded-xl opacity-75 object-contain"
        alt={card.title}
      />
      : 
      <div
        className= "relative w-96 h-full rounded-xl bg-white"
      > 
      <div className="flex flex-row w-96 p-3 ">
      <div className="flex flex-col p-2">
            <span className="md:text-left text-gray-700 text-2xl lg:text-3xl">{card?.header}</span>
            <span className="md:text-left text-gray-700 text-lg lg:text-2xl">{card?.body}</span>
            <span className="md:text-left text-gray-700 text-lg lg:text-2xl">{card?.body2}</span>
            </div>
        </div>   
        </div>   
        }
      
      
        {flip ? <div className='flex fixed flex-wrap bg-white bg-opacity-40 m-2 p-2 text-center top-5 rounded-lg w-4/5'>
          <span class="text-xl lg:text-3xl xl:text-5xl text-gray-800 md:text-left">{card?.title}</span>
          </div>
        : 
        null
        }
    </div>
    </div>
  )
}

export default Card