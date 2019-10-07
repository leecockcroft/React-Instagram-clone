import React from 'react'

import Icon from './Icon'
import InstaLogo from './InstaLogo'
import SearchBar from './SearchBar'

const Nav=(props)=>{
return (

<nav>
  <div className='container'>
    <div className='navbar'>

      <div className='logos'>
          <Icon icon={"fa-instagram"}/>
          <div className='divid'></div>
            <InstaLogo logo={'Instgram'}/>
          </div>

      <div className='search'>
          <SearchBar searchImage={props.searchImage}/>
      </div>

      <div className='logos-flex'>
        <Icon icon={"fa-instagram"}/>
          <Icon icon={"fa-instagram"}/>
            <Icon icon={"fa-instagram"}/>
      </div>

    </div>

  </div>
</nav>
)

}


export default Nav
