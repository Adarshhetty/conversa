import React, { useState } from 'react'

const HomePage = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div>
          {!toggle ? (<div className='flex justify-center items-center bg-gray-600'>
              <section class="bg-none">
                  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                      <h1 class="text-xl font-bold leading-tight tracking-tight mb-2 md:text-3xl text-white">
                          Conversa
                      </h1>
                      <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                  Sign in to your account
                              </h1>
                              <form class="space-y-4 md:space-y-6" action="#">
                                  <div>
                                      <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                      <input type="email" name="email" id="email" class="border 
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                    w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
                                     focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                                  </div>
                                  <div>
                                      <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                                      <input type="password" name="password" id="password" placeholder="••••••••" class=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                  </div>

                                  <button type="submit" class="w-full text-gray-900 bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-400 focus:ring-primary-800">Sign in</button>
                                  <p class="text-sm font-light text-gray-400">
                                      Don’t have an account yet? <button onClick={()=>setToggle(true)} class="font-medium  hover:underline text-primary-500">Sign up</button>
                                  </p>
                              </form>
                          </div>
                      </div>
                  </div>
              </section>
          </div>) : (<div className='flex justify-center items-center bg-gray-600 '>
            
              <section class="bg-none">
                     
                  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                          <h1 class="text-xl font-bold leading-tight tracking-tight mb-2 md:text-3xl text-white">
                              Conversa
                          </h1>
                      <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                                  Sign up for your account
                              </h1>
                              <form class="space-y-2 md:space-y-4" action="#">
                                      <div>
                                          <label for="name" class="block mb-2 text-sm font-medium text-white">Your username</label>
                                          <input type="text" name="name" id="name" class="border 
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                    w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
                                     focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                                      </div>
                                  <div>
                                      <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                                      <input type="email" name="email" id="email" class="border 
                                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                    w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white
                                     focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" />
                                  </div>
                                  <div>
                                      <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                                      <input type="password" name="password" id="password" placeholder="••••••••" class=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                                  </div>
                                      <label for="image" class="block mb-2 text-sm font-medium text-white">Your picture</label>
                                      <div class="flex items-center justify-center w-full">
                                          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border-2  border-dashed rounded-lg cursor-pointer  hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                  <svg class="w-4 h-4  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                  </svg>
                                                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload your photo</span> </p>
                                                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                              </div>
                                              <input id="dropzone-file" type="file" class="hidden" />
                                          </label>
                                      </div> 

                                  <button type="submit" class="w-full text-gray-900 bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-400 focus:ring-primary-800">Sign Up</button>
                                  <p class="text-sm font-light text-gray-400">
                                      Already have an account? <button onClick={() => setToggle(false)} class="font-medium  hover:underline text-primary-500">Sign in</button>
                                  </p>
                              </form>
                          </div>
                      </div>
                  </div>
              </section>
          </div>)}
    
      </div>
  )
}

export default HomePage
