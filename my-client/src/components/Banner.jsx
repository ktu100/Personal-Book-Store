import React, { useState } from 'react'
import BannerCard from '../home/BannerCard'
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const [book, setBook] = useState(null); // State to hold the searched book result
  const navigate =useNavigate();

  const handleSearch = async () => {
    navigate('/shop', { state: { searchTerm } });
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/*Left Side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and Sell your books
          </h2>
          <span className='text-5xl text-blue-700'>for the Best Prices</span>
          <p className='text-3xl md:w-4/5'>Books Le Lo!</p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder='Search a book'
              className='py-2 px-2 rounded-s-sm outline-none'
              value={searchTerm} // Bind the input to the searchTerm state
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
            <button
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
              onClick={handleSearch} // Trigger the search on button click
            >
              Search
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <BannerCard book={book} /> {/* Pass the book data to the BannerCard component */}
        </div>
      </div>
    </div>
  )
}

export default Banner
