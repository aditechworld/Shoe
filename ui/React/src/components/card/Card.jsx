import React from 'react'
import './card.css'

function Card({ img, title, desc, price, action, btn }) {
    let btnText = <> <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            stroke-linejoin="round"
            stroke-linecap="round"
        ></path>
    </svg>
        <span>Add To Cart</span></>
    return (
        <div className='card zoom col-lg-4 col-md-6'>
            <div className='card-image'>
                <img width='100%' src={img || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D'} alt='image-1'></img>
            </div>
            <div className='mx-4'>
                <h4 className='mt-1 text-gradient'>
                    {title || 'Nike Shoe'}
                </h4>
                <div className='card-desc row'>
                    <div className='card-desc-text col'>
                        {desc || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    </div>
                </div>
                <div class="action row my-4">
                    <div class="price col-sm-6">
                        <span>${price || '299'}</span>
                    </div>
                    <button class="cart-button col btn btn-dark" onClick={() => {action() }}>
                        {btn || btnText}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card