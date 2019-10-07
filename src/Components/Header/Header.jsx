import React, { Component } from "react";
import ReactDOM from 'react-dom';

import HeaderImg from'./HeaderImg';
import HeaderText from'./HeaderText';
import PostDetails from'./PostDetails';
import profileImg from '../../images/20150934.jpg';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state={
      profileImg:profileImg,
      following:true,
      profileName:'lee thomas',

      follow:200,
      followers:900
}

}

EventHandler=()=>{
this.setState({
following:!this.state.following


})


}


  render() {

const {post,follow,followers,following}=this.state;

    return (
      <header>
        <div className="container">
          <div className="header-wrapper">

          <HeaderImg profileImg={this.state.profileImg}/>
            <HeaderText name={this.state.profileName} following={following} EventHandler={this.EventHandler} post={this.props.post} follow={follow} followers={followers}/>>

        </div>
        </div>




    </header>


    )

 }


}

export default Header;
