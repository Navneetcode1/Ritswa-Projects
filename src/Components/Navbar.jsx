import React from 'react'

const Navbar = () => {
    const src="https://adelaideinn.com.au/wp-content/uploads/2018/05/adelaide-inn-logo@2x.png"
  return (
    <div className='bg-[url("https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=")] h-96'>
        <div className='m-8 content-center md:flex py-6  gap-x-10' >
            <div>
            <img className='w-20 h-25' src={src} alt="Contact Navneet"/>
           
            </div>
            <div>
                <h5 className='text-white'>About</h5>
            </div>
            <div>
                <h5 className='text-white'>Accomdation ▼</h5>
            </div>
            <div>
                <h5 className='text-white'>Events</h5>
            </div>
            <div>
                <h5 className='text-white'>Restaurant</h5>
            </div>
            <div>
                <h5 className='text-white'>About</h5>
            </div>
            <div>
                <h5 className='text-white'> ✆ 0882675066 |</h5>
                
            </div>
            <div>
            <h5 className='text-yellow'>BOOK A ROOM</h5>
            </div>



           
           

        </div>
        <div class='mt-50'>
       
            <label class="block mb-2 text-sm font-medium text-orange-900 font-extrabold text-white">Email</label>
            <input type="text" id="first_name" class=" border-slate-900 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half opacity-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black-500" placeholder="Write Your Name" required/>
       
        </div>
    </div>
  )
}

export default Navbar