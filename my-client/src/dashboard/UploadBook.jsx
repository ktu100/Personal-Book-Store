import React, { useState } from 'react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Autobiography",
    "Horror",
    "Mystery",
    "Science Fiction",
    "Memoir",
    "Travel",
    "Children's Book",
    "Adult",
    "Fantasy",
    "History",
    "Business",
    "Thriller",
    "Self-Help"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    console.log(bookObj);

    // Fetch to upload the book
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then(res => res.json())
      .then(data => {
        alert("Book uploaded successfully!");
      })
      .catch(error => {
        alert("Failed to upload book.");
        console.error("Error uploading book:", error);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form onSubmit={handleBookSubmit} className="max-w-sm mx-auto flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* Title of Book */}
        <div className="mb-5">
          <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Title</label>
          <input type="text" id="bookTitle" name="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" required />
        </div>

        {/* Author of Book */}
        <div className="mb-5">
          <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Name</label>
          <input type="text" id="authorName" name="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of Author" required />
        </div>

        {/* Image URL of Book */}
        <div className="mb-5">
          <label htmlFor="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
          <input type="text" id="imageURL" name="imageURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL of image" required />
        </div>

        {/* Category of Book */}
        <div className='mb-5'>
          <label htmlFor="inputState" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Category</label>
          <select id="inputState" name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>

        {/* Description of Book */}
        <div className="mb-5">
          <label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Description</label>
          <textarea id="bookDescription" name="bookDescription" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brief description of the book..." required></textarea>
        </div>

        {/* PDF URL of Book */}
        <div className="mb-5">
          <label htmlFor="bookPDFURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book PDF URL</label>
          <input type="text" id="bookPDFURL" name="bookPDFURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL of pdf of book" required />
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload Book</button>
      </form>
    </div>
  );
};

export default UploadBook;
