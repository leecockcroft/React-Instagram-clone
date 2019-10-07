import React from 'react'
import PostDetails from './PostDetails'

const HeaderText=(props)=>{

return (
      <div className="header-title">
        <div>
            <h3 className='inline'>{props.name}</h3>
          <button onClick={props.EventHandler}>{props.following ? "Following":"Follow"}</button>
          <button>+</button>
        </div>
        <div className='post'>

        <span><strong>{ props.post} </strong>Posts</span>&nbsp;
          <span><strong>{ props.follow}</strong> Followers</span>&nbsp;
            <span><strong>{ props.followers}</strong> Following</span>
      </div>

      <div className="header-text-main">
        <h3>{props.name}</h3>
        <p> Details of the Page </p>

      </div>



      </div>





)





}

export default HeaderText
