import React from 'react'
import 'tw-elements';
import Card from './Card';

const data = [
  {
  "key" : "1",
  "src" : "https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/web3-wallets__706856cb3b699b0f08335e9be7130eb4.png",
  "title" : "Sign up for our web3 wallet",
  "header" : "A web3 wallet by Robinhood",
  "body" : "Trade and swap crypto with no network fees. Connect to decentralized applications (dapps). Store NFTs and connect to NFT marketplaces. Earn yield on your crypto to grow your stack."
},
  {
  "key" : "2",
  "src" : "https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/stock-lending-background__f578a12f9e70ce55356325a4e4488fe4.png",
  "title" : "Stock Lending",
  "header" : "Stock Lending",
  "body" : "Get the opportunity to earn income on stocks you already own—just by turning on Stock Lending. We work to find borrowers and you get paid when there’s a match."
},
  {
  "key" : "3",
  "src" : "https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/crypto-gifting-background__dfda038be16ade43396041fe6c049159.png",
  "title" : "Crypto Gifts",
  "header" : "Crypto Gifts",
  "body" : "Crypto gifts allow you to send your favorite crypto to your favorite people from the Robinhood app.",
  "body2" : "You can quickly customize a gift by choosing a design, cryptocurrency, gift amount, and personal message."
},
  {
  "key" : "4",
  "src" : "https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/free-stock-background__14a6a3aeadc3e5981fbdf08045e7e8ea.png",
  "title" : "Choose your free stock",
  "header" : "Choose your free stock",
  "body" : "Sign up for Robinhood or refer a friend to choose your free fractional share in companies you love. A fractional share is a small increment of equity (less than a full share) in a stock or exchange-traded fund (ETF). But that little fraction can go a long way."
},
  {
  "key" : "5",
  "src" : "https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/ipo-access-background__509d8428dc68220b7648632fee3e73c5.png",
  "title" : "Buy at IPO price",
  "header" : "Buy at IPO price",
  "body" : "Get in at the IPO price. With IPO Access, you have the advantage to become one of the first public investors of those big names you’ve been keeping an eye on."
}]

function Cards() {
  
 
  return (
    <div className="mx-auto container px-4 xl:px-0">
  <div className=" relative flex flex-col h-full md:h-full items-center justify-center md:flex-row snap-x overflow-auto">
    {data.map((item) => (
      <Card card={item} key={item.key}/>
    ))}
    </div>
  </div>

  )
}

export default Cards