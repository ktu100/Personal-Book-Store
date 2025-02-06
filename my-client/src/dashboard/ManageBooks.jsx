import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks,setAllBooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setAllBooks(data));
  },[])

  const handleDelete=(id)=>{
    fetch(`http://localhost:5000/book/${id}`,{
       method:"DELETE",
    }).then(res=>res.json()).then(data=>{alert("Book Deleted Successfully")
      // setAllBooks(data);
    })
  }

  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      {/* Table*/}
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No.
                </th>
                <th scope="col" class="px-6 py-3">
                   Book Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Author Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Prices
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit or Manage
                </th>
            </tr>
        </thead>
        {
          allBooks.map((book,index)=><tbody className='divide-y' key={book._id}>
             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {book.bookTitle}
                </th>
                <td class="px-6 py-4">
                    {book.authorName}
                </td>
                <td class="px-6 py-4">
                    {book.category}
                </td>
                <td class="px-6 py-4">
                    Rs.1200
                </td>
                <td class="px-6 py-4">
                    <Link  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-11" to={`/admin/dashboard/edit-book/${book._id}`}>
                    Edit
                    </Link>
                    <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 mr-555'>Delete</button>
                </td>
            </tr>
          </tbody>)
        }
        
    </table>
</div>


    </div>
  )
}

export default ManageBooks
