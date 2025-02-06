import React, { useEffect, useState } from 'react'

const Shop = () => {
  const [books,setBooks]=useState([]);

  useEffect(()=>{
      fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data));
  },[]);
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center gap-4'>All Books are Here</h2>
      <div className='grid lg:grid-cols-4 my-12 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book=>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src={book.imageURL} alt="Book cover" className="w-full h-auto" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            {book.authorName}
            </p>
            <button className='bg-blue-700 font-semibold text-white-py-2 rounded'>Buy Now</button>
        </div>
           
            )
        }
      </div>
    </div>
  )
}

export default Shop
