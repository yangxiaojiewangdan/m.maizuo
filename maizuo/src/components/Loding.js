import React,{Component} from 'react';
import '../style/Loding.css';
import axios from 'axios';

 class Loding extends Component {
  constructor(props){
    super();
    this.state = {
      films :[]
    }
    this.getFilms = this.getFilms.bind(this)
  }
  getFilms(){
    axios.get("/v4/api/film/now-playing?page=1&count=7")
    .then((res)=>{
      console.log(res)
      this.setState({
        films:res.data.data.films
      })
    })

  }
  render() {
    return (
      <div className="loding">
          <button onClick={this.getFilms} className="btn">更多热映电影</button>
          <div className="box">
            {
              this.state.films.map(function(item,index){
                return(
                  <div className="div1b" key={index}>
                    <img src={item.cover.origin}/>
                    <div className="divs">
                      <div className="name">{item.name}<span>{item.grade}</span></div>
                      <div className="mesg">{item.intro}</div>
                      <div className="shangying">{item.cinemaCount}家影院上映{item.watchCount}人购票</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
    );
  }
}

export default Loding;