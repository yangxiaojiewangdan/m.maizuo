import React,{Component} from 'react';
import '../style/Section.css';
import axios from 'axios';

 class Section extends Component {
  constructor(props){
    super();
   this.state = {
    films :[]
   }
  }
  componentDidMount(){
    axios.get("/v4/api/film/now-playing?__t=1519868791248&page=1&count=5")
    .then((res)=>{
      console.log(res);

      this.setState({
        films : res.data.data.films
      })
    })
  }
  render() {
    return (
      <div className="section">
          {
            this.state.films.map(function(item,index){
              return(
                  <div className="div1"key={index}>
                    <img src={item.cover.origin}/>
                    <div className="div2">
                      <h4>{item.name}</h4>
                      <span className="spn1">162家影院上映 {item.watchCount}人购票</span>
                      <span className="spn">{item.grade}</span>
                    </div>
                  </div>
                )
            })
          }
      </div>
    );
  }
}

export default Section;