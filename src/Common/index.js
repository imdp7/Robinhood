import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


function index() {

  return (
    <div>
    <div className='z-10 p-auto'>
        <Header/>
    </div>
    <div className="lg:px-6 xl:px-0" style={{backgroundColor:'#C3F53C'}}>
                <div className="mx-auto container relative px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-4 pb-10 lg:py-8 xl:py-12">
                            <h1 className="text-2xl lg:text-4xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Investing for Everyone</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations and fees apply. </h2>
                            <div className="w-full flex justify-center md:block">
                               <Link to={"/register"}><button className="hover:opacity-90 bg-black py-3 px-10 lg:py-5 lg:px-15 rounded-full text-white text-sm md:text-lg f-f-p">Sign Up</button></Link>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:absolute md:w-1/2 md:-ml-28" src="https://miro.medium.com/max/1200/1*eo9HE5aS0chMKpEy0wmSiw.png" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default index

