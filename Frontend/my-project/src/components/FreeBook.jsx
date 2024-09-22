import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Slider from "react-slick";
import Cards from './Cards';


function FreeBook() {
  const filterData = list.filter((data)=> data.Category === "Free");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen 2x1 container mx-auto md:px-20 px-4 '>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt.</p>
        </div>
      <div>
      <Slider {...settings}>
        {/* {filterData.map((item)=>{
          <Cards item = {item}/>
        })} */}
         <div className='mt-4 my-3 p-3' >
         <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure> 
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1726081413~exp=1726085013~hmac=10304e1a23e25ef75f2fde0521a18ff7b6f6978c231136c7424e2e01aa0cf394&w=740"
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Comady Book
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A Comady Book</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">00 $</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg border-[2px] duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200">
  <figure> 
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1726081413~exp=1726085013~hmac=10304e1a23e25ef75f2fde0521a18ff7b6f6978c231136c7424e2e01aa0cf394&w=740"
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Gym Book
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A GymSide Book</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">00 $</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg border-[2px] duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200">
  <figure> 
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1726081413~exp=1726085013~hmac=10304e1a23e25ef75f2fde0521a18ff7b6f6978c231136c7424e2e01aa0cf394&w=740"
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Comady Book
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A Comady Book</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">00 $</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg border-[2px] duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3' >
         <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200">
  <figure> 
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1726081413~exp=1726085013~hmac=10304e1a23e25ef75f2fde0521a18ff7b6f6978c231136c7424e2e01aa0cf394&w=740"
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Comady Book
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A Comady Book</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">00 $</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg border-[2px] duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
        <div className='mt-4 my-3 p-3' >
         <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200">
  <figure> 
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1726081413~exp=1726085013~hmac=10304e1a23e25ef75f2fde0521a18ff7b6f6978c231136c7424e2e01aa0cf394&w=740"
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Comady Book
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A Comady Book</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">00 $</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg border-[2px] duration-200">Buy Now</div>
    </div>
  </div>
</div>
        </div>
      </Slider>
      </div>
      </div>
    </>
  )
}

export default FreeBook;
