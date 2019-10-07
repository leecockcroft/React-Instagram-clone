import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Data from '../../Data'
import axios from 'axios'
 import testImg from '../../images/20150934.jpg'

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state={
          data:[]
}

}


 async componentDidMount(){
   console.log(Data)


this.setState({
  data:Data
})

}

  render() {

    return (
      <div className="container">
        <div className="carousel">

        {Data.map(item => (
          <div className="carousel-container">
          <img className="carousel-image" src={item.url}/>
          <p>{item.description}</p>
          </div>
        )
      )
    }
        </div>



    </div>


    )

 }


}

export default Carousel;
