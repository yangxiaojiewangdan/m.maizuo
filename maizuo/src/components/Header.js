import React,{Component} from 'react';
import '../style/Header.css';

 class Header extends Component {
  render() {
    return (
      <div className="header">
      	<i class="icon iconfont tubiao1" onClick={this.props.ttt}>&#xe6b7;</i>
      	<p className="name">卖座电影</p>
      	<span className="span1">北京
      	   <i class="icon iconfont tubiao2">&#xe949;</i>
      	</span>
      	<span className="span2">
      	   <i class="icon iconfont tubiao3">&#xe6e3;</i>
      	</span>
      </div>
    );
  }
}

export default Header;