import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json';
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
      <div className='max-w-screen 2x1 container mx-auto md:px-20 px-4'>
            <div className='mt-28 item-justify-center text-center '>
              <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :</span></h1>
              <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente animi quibusdam. In ipsam reprehenderit fuga, non quisquam dignissimos dolore sed voluptas, iure totam voluptatem nemo aliquid! Assumenda illo voluptate ipsam nesciunt doloribus perferendis. Odit atque modi, at similique repudiandae magnam porro tenetur iure perspiciatis pariatur temporibus itaque ab minima?</p>
              <Link to="/">
              <button className='mt-6 cursor-pointer bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Get Back</button>
              </Link>
            </div>
            <div className='mt-12 grid  grid-cols-1 md:grid-cols-4 '>
              {
                list.map((item)=>{
                  <Cards key={item.id} item={item} />
                })
              }
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
         <div className="card bg-base-100 w-92 shadow-xl  hover:scale-105 duration-200">
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
            </div>
      </div>
    </>
  )
}

export default Course 