            import React, { Component } from "react";
            import ReactDOM from 'react-dom';

            import Nav from './Components/Navbar/Nav'
            import Header from './Components/Header/Header'
            import Carousel from './Components/Carousel/Carousel'
            import Data from './Data'
            import Gallery from './Components/Gallery/Gallery'


            class Main extends Component {

              constructor(props) {
                super(props);

                this.state={
                  post:100,
                  gallery:[],


            }

            }
            async componentDidMount(){



            this.setState({
             gallery:Data
            })

            }

increaseLikes=(e,i)=>{

console.log(e.target,i)
this.setState({
gallery:this.state.gallery.map((item,index)=>{
  if(item.index===i){
    return { ...item,
                likes: item.likes + 1  };
}
         else {
           return item;
         }



})

})


}


              render() {



                return (
                  <div>
                    <Nav/>
                    <Header post={this.state.gallery.length}/>
                    <Carousel/>
                    <Gallery gallery={this.state.gallery} increaseLikes={this.increaseLikes}/>



                </div>


                )

             }


            }

            export default Main;
