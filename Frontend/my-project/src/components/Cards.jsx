import React from 'react';
import list from '../../public/list.json'

function Cards({item}) {
  console.log(list);
  
  return (
    <>
      <div>
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark-border-">
  <figure>
    <img
      src={item.image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards;