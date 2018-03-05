import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Section from './components/Section';
import Loding from './components/Loding';
import './iconfont/iconfont.css';
import {BrowserRouter as Router,Route,Link, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showflag :false
    }
    this.menu = this.menu.bind(this)
  }
  menu(){
    this.setState({
      showflag: !this.state.showflag
    })
  }
  render() {
    var ul = <ul>
          <li>首页</li>
          <li>影票</li>
          <li>影院</li>
          <li>商城</li>
          <li>我的</li>
          <li>卖座卡</li>
      </ul>
        if(!this.state.showflag){
          ul=null;
        }
    return (
      <div className="App">
        <Header ttt={this.menu}/>
       <div className="ttt">
       {ul}
       <Banner/>
       <Section/>
       <Loding/>
       </div>
      </div>
    );
  }
}

export default App;
