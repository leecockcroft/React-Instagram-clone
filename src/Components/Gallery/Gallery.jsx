        import React from 'react'


        const Gallery =(props)=>{
        return (
          <div className="container">
            <div className="main-gallery">

                {props.gallery.map((item,index) => (<div key={index} className='img-container' onClick={(e)=>props.increaseLikes(e,index)}><img data-counter='0' className='gallery-images' src={item.url}/><p className='likes'>likes {item.likes}</p></div>))}
                </div>
                </div>
        )



        }



        export default Gallery
