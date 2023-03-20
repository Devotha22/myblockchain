/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export default function SignUp() {
    return (
        <div className="bg-blue-900">
<div className=" top h-12 fixed right-0 left-0 flex flex-col justify-center items-center">
    <img className="h-6 w-60 block mx-4" src="https://login.blockchain.com/img/bc-logo.svg?91c7840afd" alt="login-blockchain" /> </div>
<section class="body dark:bg-gray-900 flex flex-col justify-center items-center ">
     
      <div class="w-84 bg-white rounded-lg shadow mt-24 dark:border md:mt-6 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-sm  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Your Blockchain.com Account
            </h1>
              <p>Get Started For Free by Signing Up Now.</p>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Adress" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Enter Pasword" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Re-Enter Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="country-of-resident" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">country-of-resident</label>
                      <input type="text" name="country-of-resident" id="country-of-resident" placeholder="select country" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="referal-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Have a referral code?</label>
                      <input type="text" name="referal-code" id="referal-code" placeholder="Enter Referal Code" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">By creating an account, you agree to Blockchain.com’s . <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms of Service & Privacy Policy</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue</button>
                  <div className="flex ">
                      <img className=" m-2 w-28 h-12" src="https://login.blockchain.com/img/apple-app-store-badge.svg?6518b9c800" alt="apple-app"/>
                      <img className=" m-2 w-28 h-12" src="https://login.blockchain.com/img/google-play-badge.svg?3f923d916a" alt="play-badge"/></div>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 border-t-2">
                      Already have a Blockchain.com account? <p class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login -</p>
                  </p>
              </form>
          </div>
      </div>

</section>
        </div>
    )
}
