import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'
const FavouriteBooks = () => {
  const [books,setBooks]=useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-books");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setBooks(data); // Set the fetched books to state
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchBooks(); // Call the async function
  }, []); // Empty dependency array means this effect runs once when the component mounts


  return (
    <div>
    <BookCards books={books} headline="Best Seller books"/>    
    </div>
  )
}

export default FavouriteBooks
