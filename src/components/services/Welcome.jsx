import React from 'react'

const Welcome = () => {
  return (
    <>
    <div className='w-full'>
        <div className='container mx-auto'>
            <div className='text-center'>
                <p className='text-center font-extrabold text-[40px] mt-15'>Welcome To Name</p>
                <p className='text-center'>The Largest Luxury Spa in Name</p>
            </div>

            <div className='w-full grid grid-cols-1 mt-10 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-2'>
                <div className='sm:w-full lg:w-full xl:w-full'>
                    <figure>
                        <img src="https://thaiodyssey.co.in/assets/img/blog/475003.jpg" alt="" className='w-[]' />
                    </figure>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='w-full'>
                        <p className='text-[35px] font-extrabold'>Mudita Spa’s Philosophy</p>
                    </div>
                    <div className='lg:w-[600px] mt-10 w-ful'>
                            <p>Mudita Spa, a wonderful means of communicating our love and compassion for every client in a very direct way. You are about to enter a special place where your every need will be fulfilled with the best treatment and the selection of an international skin care product, Kerstin Florian, that provides a</p>
                            <p>Mudita Spa, a wonderful means of communicating our love and compassion for every client in a very direct way. You are about to enter a special place where your every need will be fulfilled with the best treatment and the selection of an international skin care product, Kerstin Florian, that provides a complete line of high-quality products whose active ingredients are natural plant extracts and essential oils.</p>
                    </div>
                    <div>
                        <button className='mt-10 bg-gray-800 text-white p-4'>View Detials</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Welcome