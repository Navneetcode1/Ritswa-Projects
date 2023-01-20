import React from 'react'

const Body1 = () => {
  return (
    <div className='bg-white w-full ml-10 ml-10' >
        <div>
            <h1 className=' text-black  text-4xl text-center font-serif'>Under New Management</h1>
        </div>
       
        <br/>
        <div>
            <h4 className='text-orange-300 text-xl text-center font-serif'>An elegant and charming hotel awaits you in the heart of North Adelaide</h4>
        </div>
        <br/>
        <div>
            <div class="md:flex gap-x-10 text-center items-center">
                <div class="md:flex">
                    <img class='w-24  mb=2' src="https://thumbs.dreamstime.com/b/golden-wifi-signal-illustration-concept-mobile-wireless-business-82102508.jpg"/>
                <h4 class="text-black mt-10"> Free Wifi</h4>
                </div>
               <div class="md:flex">
                <img class='w-24  mb=2' src="https://www.shutterstock.com/image-vector/fork-knife-sign-vector-golden-600w-730333186.jpg"/>
               <h4 class="text-black  mt-10">Dine-in or Take-Away Breakfast</h4>
               </div>
               <div class='md:flex'>
                <img class='w-24  mb=2' src="https://cdn-icons-png.flaticon.com/128/1072/1072358.png"/>
               <h4 class="text-black  mt-10">   Free Limited Parking</h4>
               </div>
               <div class="md:flex">
                <img  class='w-24  mb=2' src="https://cdn-icons-png.flaticon.com/128/1072/1072358.png"/>
               <h4 class= "text-black mt-10" > $10 per night Reserved Bay Parking</h4>
               </div>

            </div>
        </div>
        <br/>
        <div class="md:flex space-x-80">
            <div>
            <p class="text-black space-x h-1 ml-20 text-serif">A charming and stylish 4 star hotel awaits you in the heard of North Adelaide, located on the prominent O’Connell Street walking distance from some award wining fine dining restaurants, entertainment, local attractions and short drive from the Adelaide CBD and world renowned Adelaide Oval.

Adelaide Inn’s 64 recently renovated and well-appointed accommodation rooms and suites are complemented by elegant spaces including flexible meeting and function rooms, an outdoor pool and spa area, and Fox Restaurant serving breakfast daily.</p>
            </div>
            <div>
                <p class="mr-20">In addition, on the hotels doorstep are fashion boutiques, restaurants, bars, pubs, a cinema, golf course, jogging tracks and Adelaide Oval.

Welcome to our hotel, the elegant and charming Adelaide Inn</p>
            </div>
            
        </div>
    </div>
  )
}

export default Body1