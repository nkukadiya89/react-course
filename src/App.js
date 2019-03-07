import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){

  super();
  this.state= {
    counter: 0
  }
}

addcount(){
  this.setState({
    counter:this.state.counter + 1
  }); 
}

// myfunc(){
//   //var date = new Date();
//   alert('k');
// }

/* add(x,y){
  alert(x+y);
} */

/* substract(){
  alert(100-90);
}

multiplication(){

}

division(){

} */


  render() {
    var style = {
      color:'red'
    }
    var plus = 3+4;
    return (
      <div>
          {/* {this.props.children} */}
          {/* {this.props.mycontent} */}
          {this.state.counter}
          <button onClick={this.addcount.bind(this)} >click me</button>
          
         {/*  <table>
            <tr><td><button onClick={this.add(1,4)}>Add</button></td></tr>
            <tr><td><button onClick={this.substract}>substract</button></td></tr>
            <tr><td><button onClick={this.multiplication}>multiplication</button></td></tr>
            <tr><td><button onClick={this.division}>division</button></td></tr>
          </table> */}
          <Header></Header>
          <MainContent></MainContent>
      </div>
    );
  }
}


class Header extends Component{
  render(){

    return (
     <div class="header">
        <div class="left">
            <img src={logo} height='50' width='50'/>
        </div>
        <div class="right">
          <span>USER</span>
        </div>
     </div> 
    )
  }
}

class MainContent extends Component{
  render(){

    return(
      <p>Hello World!</p>
    )
  }
  
}

export default App;
