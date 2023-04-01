import React, {useState} from 'react'

import "./Header.css"

const Header = () => {

  const [menu, setMenu] = useState(false)

const openMenu = ()=>{
  setMenu(!menu)
}
  return (
    <div className='header'>
        <div> <img
              src={"/logo.png"}
              alt="Logo"
              width={100}
              height={30}

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
              src="/Instagram_Glyph_White.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            /></a>
            <div className='hamburger' onClick={openMenu}>
            <img
              src="/hamburger.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            />
            </div>
            {menu ?  <div className='headerMenu' dir='rtl'>
              <div onClick={openMenu} className='menuC'>X</div>
              <h2 className='menuC'>חוגים</h2>
              <h2 className='menuC'>מחירים</h2>
              <h2 className='menuC'>גלריה</h2>
          <h2 className='menuC'>מאמנים</h2>
        <h2 className='menuC'>צור קשר</h2>  
        </div>:null}
            </div>
    </div>
  )
}

export default Header