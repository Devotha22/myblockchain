/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../App.css";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

 function Home() {
    const navigate = useNavigate();
  
    return (
        <div>
            <div className="App h-10 fixed top-0 left-0 right-0">
        <h1><p>Secure Your crypto with blockchain.com. Learn more</p></h1>
      </div>
        <div className=" body min-h-screen py-8  ">
          <div className="header h-20 pt-6 text-white flex p-4 fixed left-0 right-0 ">
            <svg width="224" height="24" viewBox="0 0 224 24" fill="none"    class="Header__BlockchainLogo-ra9ecu-7 jPvoRr"><g clip-path="url(#a)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M139.92 3.879a2.028 2.028 0 0 1 1.163-1.954 2.026 2.026 0 1 1 .862 3.859 1.968 1.968 0 0 1-1.853-1.158 1.969 1.969 0 0 1-.172-.747zm.15 3.645h3.735v13.5h-3.735v-13.5zm-99.87-4.5H33v18h7.71c4.035 0 6.195-2.115 6.195-4.98a4.17 4.17 0 0 0-3.96-4.365v-.18a3.84 3.84 0 0 0 3.255-3.87c0-2.685-2.025-4.605-6-4.605zm2.145 5.22c0 1.425-1.215 2.28-2.715 2.28l-2.88.045v-4.5h2.94c1.695 0 2.655.75 2.655 2.175zm.555 7.395c0 1.35-.87 2.235-3 2.235h-3.15v-4.77h3.15a2.626 2.626 0 0 1 3 2.535zm5.85 5.385h3.795l-.06-18H48.75v18zm5.76-6.705c0-4.185 2.55-6.975 6.645-6.975s6.645 2.79 6.645 6.975-2.55 6.96-6.645 6.96-6.645-2.79-6.645-6.96zm9.48-.008c-.002-2.35-.977-4.087-2.82-4.087-1.845 0-2.865 1.74-2.865 4.095 0 2.355.975 4.08 2.865 4.08 1.888 0 2.818-1.736 2.82-4.088zm11.85-6.967c-4.095 0-6.63 2.835-6.63 6.975 0 4.11 2.49 6.96 6.63 6.96 3.555 0 5.82-2.1 6-5.205H78.3a2.4 2.4 0 0 1-2.445 2.25c-1.755 0-2.88-1.545-2.88-4.05s1.14-4.005 2.88-4.005a2.4 2.4 0 0 1 2.445 2.25h3.54c-.12-3.12-2.475-5.175-6-5.175zm7.965-4.32h3.75v9.615h.195l4.335-5.115h4.29l-5.01 5.85 5.265 7.65h-4.38l-3.69-5.445-1.005 1.155v4.29h-3.75v-18zm19.44 4.32c-4.095 0-6.63 2.835-6.63 6.975 0 4.11 2.49 6.96 6.66 6.96 3.57 0 5.82-2.1 6-5.205h-3.525a2.414 2.414 0 0 1-2.46 2.25c-1.755 0-2.88-1.545-2.88-4.05s1.14-4.005 2.88-4.005a2.417 2.417 0 0 1 2.46 2.25h3.495c-.105-3.12-2.475-5.175-6-5.175zm11.715 13.68h-3.735v-18h3.63v6.885h.165a3.985 3.985 0 0 1 4.035-2.565c2.805 0 4.665 1.92 4.665 5.085v8.595h-3.75v-7.935a2.299 2.299 0 0 0-.577-1.882 2.292 2.292 0 0 0-1.823-.743 2.523 2.523 0 0 0-2.485 1.7 2.51 2.51 0 0 0-.125 1.06v7.8zm15.66-7.935c-2.67.255-5.07 1.17-5.07 4.17 0 2.67 1.905 4.02 4.485 4.02a4.141 4.141 0 0 0 3.945-2.13h.105v1.875h3.555v-9.12c0-3.225-2.73-4.575-5.73-4.575-3.24 0-5.355 1.545-5.88 4.005l3.465.285a2.25 2.25 0 0 1 2.4-1.5c1.275 0 1.995.645 1.995 1.755 0 .885-.915.99-3.27 1.215zm3.3 1.605v1.5a2.599 2.599 0 0 1-.891 1.805 2.591 2.591 0 0 1-1.914.625c-1.155 0-1.98-.525-1.98-1.575 0-1.05.87-1.575 2.19-1.755a9.189 9.189 0 0 0 2.595-.6zm12.33 6.33h3.81l-.06-7.8a2.473 2.473 0 0 1 2.55-2.76 2.31 2.31 0 0 1 2.4 2.625v7.935h3.75v-8.595c0-3.15-1.845-5.085-4.665-5.085a4.112 4.112 0 0 0-4.065 2.565h-.15V7.524h-3.57v13.5z" fill="currentColor"></path>
                <path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M199.95 7.524h-3.57l-.015 13.5h3.75v-8.1a2.268 2.268 0 0 1 1.292-2.276 2.26 2.26 0 0 1 .898-.214 1.977 1.977 0 0 1 1.959 1.339c.091.268.124.554.096.836v8.415h3.63v-8.25a2.114 2.114 0 0 1 2.175-2.34 2.01 2.01 0 0 1 2.085 2.25v8.34H216v-9a4.366 4.366 0 0 0-8.25-2.115h-.21a3.57 3.57 0 0 0-3.675-2.565 3.778 3.778 0 0 0-3.75 2.565h-.165V7.524zm-26.25-.18c-4.095 0-6.615 2.835-6.615 6.975 0 4.11 2.475 6.96 6.69 6.96 3.57 0 5.835-2.1 6-5.205h-3.525a2.414 2.414 0 0 1-2.46 2.25c-1.74 0-2.88-1.545-2.88-4.05s1.14-4.005 2.88-4.005a2.417 2.417 0 0 1 2.46 2.25h3.45c-.105-3.12-2.475-5.175-6-5.175zm-11.83 10.315a2.102 2.102 0 0 0 1.48 3.59 2.1 2.1 0 1 0-1.48-3.59zm19.27-3.34c0-4.185 2.55-6.975 6.645-6.975s6.63 2.79 6.63 6.975-2.535 6.96-6.63 6.96-6.645-2.79-6.645-6.96zm9.48-.007c-.002-2.352-.977-4.088-2.82-4.088-1.845 0-2.865 1.74-2.865 4.095 0 2.355.975 4.08 2.865 4.08 1.888 0 2.818-1.736 2.82-4.087z" fill="currentColor"></path>
                <path d="M2.054 8.722.959 9.817a3.12 3.12 0 0 0 0 4.5l8.821 8.909c.21.214.452.391.72.525V12.952l-8.446-4.23z" fill="#3D89F5"></path>
                <path d="m21.947 8.722 1.095 1.095a3.12 3.12 0 0 1 0 4.5l-8.822 8.909c-.21.214-.452.391-.72.525V12.952l8.447-4.23z" fill="#1656B9"></path><path d="M19.828 6.487 14.308.952a3.134 3.134 0 0 0-4.5 0L4.273 6.487l7.755 3.87 7.8-3.87z" fill="#85B5F8"></path></g><defs><clipPath id="a"><path fill="white" d="M0 0h216v24H0z">
                </path></clipPath></defs>
            </svg>
                <a className="pl-6">Wallet</a>
                <a className="pl-6">Exchange</a>
                <a className="pl-6">Explorer</a>
                <a className="pl-6">Institutional</a>
                <a className="pl-6">...</a>
              <div> 
               <path d="m559.179993 45.9010802c0-3.4003115-2.373108-5.56108-5.564608-5.56108-3.191501 0-5.565397 2.1674824-5.565397 5.56108 0 3.3935975 2.090012 5.568921 5.565397 5.568921s5.564608-2.1686096 5.564608-5.568921zm4.820007 9c0 .7572115-.627404 1.3846154-1.384615 1.3846154-.367789 0-.72476-.1514424-.973558-.4110577l-3.710337-3.6995193c-1.265625.876202-2.780048 1.3413462-4.316105 1.3413462-4.207933 0-7.615385-3.4074519-7.615385-7.6153846s3.407452-7.6153846 7.615385-7.6153846c4.207932 0 7.615384 3.4074519 7.615384 7.6153846 0 1.5360577-.465144 3.0504807-1.341346 4.3161057l3.710337 3.7103366c.248798.2487981.40024.6057692.40024.9735577z" fill="currentColor" fill-rule="evenodd" transform="translate(-546 -38)"></path>
                </div>  
               <button className="border-2 border-white rounded-md p-2 ml-8 ">Login</button>
                
               <Link to="/signup"><button className="bg-white text-blue-800 p-2 ml-6 rounded-md">SignUp</button> </Link>
          </div>
          <div className=" bodypart bg-white h-96 mt-12"> 
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-2xl font-serif dark:text-white pt-12  pl-32 pr-96">The world’s most popular way to buy, sell, and trade crypto</h1>
          <p className="text-lg  pl-36 pr-96 mt-12">Trusted by millions since 2011 with over $1 Trillion in crypto transactions</p>
          {/* <input type="text" className="inputs border-2 "/> */}
          <input type="email" autocomplete="on" id="email" name="email" placeholder="Your email address" required className="inputs ml-28 mt-6 text-white "></input>
          <button className="bg-gray-200 text-blue-800 p-2 ml-6 rounded-md" onClick={() => navigate("/signup")} >SignUp</button>
          <div className="md:grid grid-cols-4 gap-4 text-xs ml-32 mt-16 mr-32">

         <div className="bg-white p-2  rounded-md">
            <div className="flex justify-between">
              <img alt="BTC icon" src="https://www.blockchain.com/static/img/prices/prices-btc.svg" class="h-6 w-6"/>
              <div><button className="text-blue-800 bg bg-blue-100 border-2 rounded-md h-6 pl-2 pr-2 pb-2 content-center">Buy</button>
              <button className="text-green-400 h-6 content-center bg-green-100 border-2 rounded-md m-2 pb-2">Trade</button></div>
              </div>
              <div>
                <div className="text-black pt-2"><p>BitCoin BTC</p></div>
                <div className="flex text-black pt-2" ><p className=" ">$24,883.71</p>
                <p color="chartRed" class=" text-red-600 ml-2 ">-4.19%</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between">
              <img alt="BTC icon" src="https://www.blockchain.com/static/img/prices/prices-eth.svg" class="h-6 w-6"/>
              <div><button className="text-blue-800 bg bg-blue-100 border-2 rounded-md h-6 pl-2 pr-2 pb-2 content-center">Buy</button>
              <button className="text-green-400 h-6 content-center bg-green-100 border-2 rounded-md m-2 pb-2">Trade</button></div>
              </div>
              <div>
                <div className="text-black pt-2"><p>BitCoin BTC</p></div>
                <div className="flex text-black pt-2" ><p className=" ">$24,883.71</p>
                <p color="chartRed" class=" text-red-600 ml-2 ">-4.19%</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 rounded-md">
            <div className="flex justify-between">
              <img alt="BTC icon" src="https://www.blockchain.com/static/img/prices/prices-btc.svg" class="h-6 w-6"/>
              <div><button className="text-blue-800 bg bg-blue-100 border-2 rounded-md h-6 pl-2 pr-2 pb-2 content-center">Buy</button>
              <button className="text-green-400 h-6 content-center bg-green-100 border-2 rounded-md m-2 pb-2">Trade</button></div>
              </div>
              <div>
                <div className="text-black pt-2"><p>BitCoin BTC</p></div>
                <div className="flex text-black pt-2" ><p className=" ">$24,883.71</p>
                <p color="chartRed" class=" text-red-600 ml-2 ">-4.19%</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 rounded-md h-32">
            <div className="flex justify-between">
              <img alt="BTC icon" src="https://www.blockchain.com/static/img/prices/prices-btc.svg" class="h-6 w-6"/>
              <div className="flex justify-between"><button className="text-blue-800 bg bg-blue-100 border-2 rounded-md h-6 pl-2 pr-2 pb-2 content-center">Buy</button>
              <button className="text-green-400 content-center text-xs bg-green-100 border-2 rounded-md mx-2 px-2">Trade</button></div>
              </div>
              <div>
                <div className="text-black pt-2"><p>BitCoin BTC</p></div>
                <div className="flex text-black pt-2" ><p className=" ">$24,883.71</p>
                <p color="chartRed" class=" text-red-600 ml-2 ">-4.19%</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
<section className=" bg-gray-100  mb-2 min-h-screen rounded-md flex mt-16 m-6">
<div className="min-h-screen w-1/2">
  <button className="bg-gray-400 rounded-md p-2 m-6 flex justify-center w-24 h-10 ml-28">
  <svg className="" width="137" height="32" fill="none">
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#5322e5" fill-opacity=".36"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 21.3335v-8h26.66663v8c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#fff"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#5322e5" fill-opacity=".36"></path><g stroke="#7349f2" stroke-width="2">
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" stroke-linecap="round" stroke-linejoin="round"></path>
  <circle cx="15.668" cy="18.3335" fill="#fff" r="2"></circle></g></svg> <p className="p-0">Wallet</p>
  </button>
  <h1 className="mb-4 text-2xl font-extrabold text-blue-700 ml-28">The Easiest and Most Powerful Crypto Wallet</h1>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Buy and Sell Crypto in Minutes</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Earn up to 10% on your crypto</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Control your funds with Private Key Wallet</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>At home or on the go</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>All your crypto in one place</p></div>
  <button className="bg-blue-700 text-white p-2 ml-28 rounded-md h-8 mb-4 content-center pt-0">Get Started</button>
   </div>
<div className="part2 h-88 w-1/2 mb-4 mt-4">
<img src="https://www.blockchain.com/static/img/home/products/prod-wallet-buy.png" className="mt-0 h-72 w-42 m-16" alt="home-product"/>

</div>
</section>
<section className=" bg-blue-50  mb-2 min-h-screen rounded-md flex mt-16 m-6">
<div className="part3 h-88 w-1/2 mb-4 mt-4">
<img src="https://www.blockchain.com/static/img/home/products/prod-exchange-fiat-currencies.png" alt="prod-exchange" className="mt-0 h-72 w-42 m-16"/>

</div>
  <div className="min-h-screen w-1/2">
  <button className="bg-gray-400 rounded-md p-2 m-6 flex justify-center w-24 h-10 ml-28">
  <svg className="" width="137" height="32" fill="none">
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#5322e5" fill-opacity=".36"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 21.3335v-8h26.66663v8c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#fff"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#5322e5" fill-opacity=".36"></path><g stroke="#7349f2" stroke-width="2">
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" stroke-linecap="round" stroke-linejoin="round"></path>
  <circle cx="15.668" cy="18.3335" fill="#fff" r="2"></circle></g></svg> <p className="p-0">Exchange</p>
  </button>
  <h1 className="mb-4 text-2xl font-extrabold text-blue-700 ml-28">Lightning-Fast Crypto Trading</h1>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Trade in 3 fiat currencies</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>A matching engine that can keep up with you</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>24/7 live chat suppor</p></div>
  <div className="h-10 border m-2 p-2 text-blue-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>AMargin Trading</p></div>
  <button className="bg-blue-700 text-white p-2 ml-28 rounded-md h-8 mb-4 content-center pt-0">Trade Now</button>
   </div>
</section>
  
<section className=" bg-gray-100  mb-2 min-h-screen rounded-md flex mt-16 m-6">
<div className="min-h-screen w-1/2">
  <button className="bg-gray-400 rounded-md p-2 m-6 flex justify-center w-24 h-10 ml-28">
  <svg className="" width="137" height="32" fill="none">
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#5322e5" fill-opacity=".36"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 21.3335v-8h26.66663v8c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#fff"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#5322e5" fill-opacity=".36"></path><g stroke="#7349f2" stroke-width="2">
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" stroke-linecap="round" stroke-linejoin="round"></path>
  <circle cx="15.668" cy="18.3335" fill="#fff" r="2"></circle></g></svg> <p className="p-0">Wallet</p>
  </button>
  <h1 className="mb-4 text-2xl font-extrabold text-black ml-28">Bespoke crypto lending, trading, and custody for institutions</h1>
  <p className="  m-2 p-2 text-black font-serif text-sm ml-24 mt-4">Blockchain.com Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.</p>
  
  <button className="bg-yellow-600 text-white p-2 ml-28 rounded-md h-8 mb-4 content-center pt-0">Become a client</button>
   </div>
<div className="part4 h-88 w-1/2 mb-4 mt-4">


</div>
</section>

<section className=" text-yellow-600 mb-2 min-h-screen rounded-md flex mt-16 m-6 bg-red-50 ">
<div className="min-h-screen w-1/2">
  <button className=" rounded-md p-2 m-6 flex justify-center w-24 h-10 ml-28">
  <svg className="" width="137" height="32" fill="none">
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#5322e5" fill-opacity=".36"></path>
  <path d="m2.66797 21.3333v-14.66663c0-1.47276 1.1939-2.66667 2.66666-2.66667h21.33337c1.4727 0 2.6666 1.19391 2.6666 2.66667v14.66663c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 21.3335v-8h26.66663v8c0 1.4728-1.1939 2.6667-2.6666 2.6667h-21.33336c-1.47276 0-2.66667-1.1939-2.66667-2.6667z" fill="#fff" stroke="#7349f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#fff"></path>
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" fill="#5322e5" fill-opacity=".36"></path><g stroke="#7349f2" stroke-width="2">
  <path d="m2.66797 22.5585v-15.78365c0-1.36511 1.33739-2.32905 2.63245-1.89737l15.54418 5.18142c1.0889.3629 1.8234 1.382 1.8234 2.5298v14.3782c0 1.8201-1.7832 3.1054-3.51 2.5298l-15.12249-5.0409c-.81668-.2722-1.36754-1.0365-1.36754-1.8973z" stroke-linecap="round" stroke-linejoin="round"></path>
  <circle cx="15.668" cy="18.3335" fill="#fff" r="2"></circle></g></svg> <p className="p-0">Explore</p>
  </button>
  <h1 className="mb-4 text-2xl font-extrabold ml-28 text-yellow-600">Blockchain Data is in Our DNA</h1>
  <div className="h-10 border m-2 p-2 text-yellow-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Explore the top blockchains</p></div>
  <div className="h-10 border m-2 p-2 text-yellow-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Powerful Blockchain Data API</p></div>
  <div className="h-10 border m-2 p-2 text-yellow-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Industry-leading Chart</p></div>
  <div className="h-10 border m-2 p-2 text-yellow-600 font-serif text-sm ml-28 border-gray-300 rounded-md "><p>Real-time crypto prices</p></div>
  <button className="bg-yellow-700 text-white p-2 ml-28 rounded-md h-8 mb-4 content-center pt-0">Explore Now</button>
   </div>
<div className="part5 h-88 w-1/2 mb-4 mt-4">
<img src="https://www.blockchain.com/static/img/home/products/prod-explore-blockchains.png" alt="blockchain-static" className="mt-0 h-72 w-42 m-16"/>

</div>
</section>
<section className=" part6 h-28 bg-blue-900 my-4 text-white flex items-center justify-center ">
<h1 className=" text-xl font-extrabold  ">From Zero to Crypto in Minutes</h1>
<button className="bg-white text-blue-800 p-2  rounded-md h-8 ml-4 content-center pt-0">Get Started</button>
</section>
<footer >
  <div className="grid grid-cols-4 gap-4 p-8">
    <div>
    <h1 className=" text-2xl font-extrabold text-black">Blockchain</h1>
    <p>Instagram</p>
    <p>Twitter</p>
    <p>Medium</p>
    </div>
     <div>
       <h1>Product</h1>
       <p>Wallet</p>
       <p>Exchange</p>
       <p>Explore</p>
       <p>Institutional</p>
       <p>Earn </p>
       <p>Card</p>
       <p> learn</p>
       <p>Prices</p>
       <p>Chart</p>
       <p>NTF</p>
     </div>
     <div>
       <h1>Resources</h1>
       <p>APIs</p>
       <p>status</p>
       <p>Open Resource</p>
       <p>Resaerch</p>
       <p>Legal and privacy</p>
       <p>Wallet suport</p>
       <p>Exchange suport</p>
       <p>Blog</p>
       <p>Security</p>
       <p>Podcast</p>
     </div>
     <div className="block">
       <p>Company</p>
       <p>AboutUs</p>
       <p>careers hiring</p>
       <p>Press center</p>
       <p>Prime</p>
       <p>Ventures</p>
     </div>
  </div>

</footer>
     
            
        </div>
    )
}
export default Home
