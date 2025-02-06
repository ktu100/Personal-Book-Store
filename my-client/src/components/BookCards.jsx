import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCartShopping } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BookCards = ({ headline, books }) => {
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    if (book.bookTitle === "The Silent Patient") {
      window.open("https://www.goodreads.com/book/show/40097951-the-silent-patient", "_blank");
    }
    else if (book.bookTitle === "The Girl with the Dragon Tattoo") {
      window.open("https://www.goodreads.com/book/show/2429135.The_Girl_with_the_Dragon_Tattoo");
    }
    else if (book.bookTitle === "Black Sheep") {
      window.open("https://www.goodreads.com/book/show/69704909-black-sheep");
    }
    else if (book.bookTitle === "Check & Mate") {
      window.open("https://www.goodreads.com/book/show/60683957-check-mate");
    }
    else if (book.bookTitle === "The Metamorphosis") {
      window.open("https://www.goodreads.com/book/show/485894.The_Metamorphosis");
    }
    else if (book.bookTitle === "A Study in Scarlet") {
      window.open("https://www.goodreads.com/book/show/102868.A_Study_in_Scarlet");
    }
    else if (book.bookTitle === "A Game of Thrones") {
      window.open("https://www.goodreads.com/book/show/13496.A_Game_of_Thrones");
    }
    else if (book.bookTitle === "Just Add Water: My Swimming Life") {
      window.open("https://www.goodreads.com/book/show/203931794-just-add-water");
    }
    else if (book.bookTitle === "Gone Girl") {
      window.open("https://www.goodreads.com/book/show/19288043-gone-girl");
    }
    else if (book.bookTitle === "The Shining") {
      window.open("https://www.goodreads.com/book/show/11588.The_Shining#CommunityReviews");
    }
    else if (book.bookTitle === "Dune") {
      window.open("https://www.goodreads.com/book/show/44767458-dune");
    }
    else {
      navigate(`/book/${book._id}`);
    }
  };

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='flex p-1.5'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
          modules={[Pagination]}
          style={{ width: '100%', padding: '0', margin: '0' }} // Inline styles for the Swiper
          className="mySwiper w-full h-full"
        >
          {books.map(book => (
            <SwiperSlide key={book._id}>
              <div className='relative cursor-pointer' onClick={() => handleBookClick(book)}>
                <div><img src={book.imageURL} alt={book.bookTitle} /></div>
                <div className=''>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
                <div>
                  <p className='text-xl text-orange-700'>{book.authorName}</p>
                  <p className='text-blue-700'>$12</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BookCards;