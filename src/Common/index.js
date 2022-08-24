import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


function index() {



    const elements = ["card-1","card-2","card-3","card-4","card-5","card-6"]

  return (
    <div>
        <div className="sticky top-0 left-0">
        <Header/>
        </div>
        <div className="snap-x">
    <div className="lg:px-6 xl:px-0 md:h-screen p-3 md:pt-4 snap-center" style={{backgroundColor:'#014022'}}>
                <div className="mx-auto container px-4 xl:px-0 ">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-4 pb-10 lg:py-8 xl:py-12">
                            <h1 className="text-2xl lg:text-4xl xl:text-8xl font-black text-white text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Investing for Everyone</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-white text-lg lg:text-2xl">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations and fees apply. </h2>
                            <div className="w-full flex justify-center md:block">
                               <Link to={"/register"}><button className="hover:opacity-90 bg-green-600  border border-black border-opacity-50 py-3 px-10 lg:py-5 lg:px-15 rounded-full text-white text-sm md:text-lg f-f-p">Sign Up</button></Link>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-144 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:w-full md:-ml-2" src="https://miro.medium.com/max/1200/1*eo9HE5aS0chMKpEy0wmSiw.png" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:px-6 xl:px-0 md:h-screen p-3 md:pt-4 snap-center" style={{backgroundColor:'#57DB5A'}}>
                <div className="mx-auto container px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                    <div className="w-1/2 sm:w-2/5 h-144 md:h-auto m-auto flex items-center overflow-hidden">
                            <img className="md:w-full md:-ml-2" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7964c0108300933.5fbb01b5f06cd.png" alt="hero" />
                        </div>

                        <div className="md:w-3/5 md:pt-4 pb-10 lg:py-8 xl:py-12">
                            <h1 className="text-2xl lg:text-4xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-9/12 leading-tight text-heading-color">
                                Investing Start building your portfolio with just $1</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Invest in stocks, options, and ETFs at your pace and commission-free.</h2>
                            <div className="w-full flex justify-center md:block">
                               <Link to={"/register"}><button className="hover:opacity-90 bg-green-500 border border-black border-opacity-50 py-3 px-10 lg:py-5 lg:px-15 rounded-full text-white text-sm md:text-lg f-f-p">Learn more about investing</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="lg:px-6 xl:px-0 md:h-screen p-3 md:pt-4 snap-center" style={{backgroundColor:'#FFB27B'}}>
                <div className="mx-auto container px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-4 pb-10 lg:py-8 xl:py-12">
                            <h1 className="text-2xl lg:text-4xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-3/9 leading-tight text-heading-color">
                            Crypto Dive right in without the commission fees</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Other crypto exchanges charge up to 4% just to buy and sell crypto. We charge 0%. Get BTC, ETH, LTC, DOGE, and more with as little as $1.</h2>
                            <div className="w-full flex justify-center md:block">
                               <Link to={"/register"}><button className="hover:opacity-90 bg-red-400 border border-black border-opacity-50 py-3 px-10 lg:py-5 lg:px-15 rounded-full text-white text-sm md:text-lg f-f-p">Learn more about investing</button></Link>
                            </div>
                        </div>
                        <div className="w-3/5 sm:w-2/5 h-144 md:h-auto m-auto flex items-center overflow-hidden">
                            <img className="md:w-full md:-ml-2" src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:px-6 xl:px-0 md:h-screen p-3 md:pt-4 snap-center" style={{backgroundColor:'#014022'}}>
                <div className="mx-auto container px-4 xl:px-0 ">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:w-full md:pt-4 pb-10 lg:py-8 xl:py-12">
                                {elements.map((item) => (
                                    <div className="w-full h-full rounded-2xl p-4 m-3 bg-white">{item}</div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            </div>
    </div>
  )
}

export default index

