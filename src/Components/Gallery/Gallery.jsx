import React from 'react'


const Gallery =(props)=>{
return (
  <div className="container">
    <div className="main-gallery">

        {props.gallery.map(item => (<div className='img-container' onClick={props.increaseLikes}><img data-counter='0' className='gallery-images' src={item.url}/><p className='likes'>likes {item.description}</p></div>))}
        </div>
        </div>
)



}



export default Gallery
