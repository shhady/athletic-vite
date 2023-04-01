import React from 'react'

import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div> <img
              src={"/public/logo.png"}
              alt="Logo"
              width={100}
              height={30}
              priority
            /></div>
        <div className='headerMiddle'>
        <div>צור קשר</div>
        <div>עלינו</div>
          <div>גלריה</div>
          <div>מאמנים</div>
          <div>מחירים</div>
          <div>חוגים</div>
        </div>
        <div className='instagram'>
          <a target="_blank" href='https://www.instagram.com/athletic.g.y.m/'><img
              src="/public/Instagram_Glyph_White.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /></a>
            <div className='hamburger'>
            <img
              src="/public/hamburger.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            />
            </div>

            </div>
    </div>
  )
}

export default Header