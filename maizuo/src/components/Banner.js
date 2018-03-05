import React,{Component} from 'react';
import '../style/Banner.css';
import { Carousel } from 'antd';
import axios from 'axios';
 class Banner extends Component {
  constructor(props){
    super();
    this.state = {
        list :[]
    }
  }
  componentDidMount(){
    axios.get("/v4/api/billboard/home?__t=1519798552546")
    .then((res)=>{
      console.log(res);
       
      this.setState({
        list : res.data.data.billboards
      })
    })
  }
  render() {
    return (
      <div className="banner">
      	<Carousel autoplay>
            {
              this.state.list.map(function(item,index){
                  return (
                  <div><h3 key={index}><img src={item.imageUrl} /></h3></div>
                )
              })
            }
        </Carousel>
      </div>
    );
  }
}

export default Banner;