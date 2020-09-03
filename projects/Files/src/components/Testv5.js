import React from "react";
import '../css/Testv5.css';


class Testv5 extends React.Component{
constructor(props){
  super(props);
  this.state={
      raspi1:{"text":"09:00 AM Mon - 19℃ light rain","img":"","show":"auto"},
      raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":"auto"},
      raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"auto"},
      raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":"auto"},
      raspi5:{"text":"09:00 PM Mon - 14℃ overcast clouds","img":"","show":"auto"},
    };
    this.hide=this.hide.bind(this);
}

hide(x){
  let number='raspi'+(x.index+1);
  console.log("a",x,'==>',number);


  this.setState((state)=>(
    {
          [number]:{"show":"none"},

    }
  ))


}



  render(){
    const black={'color':'black'};
    const data=this.props.test;
    const weather={'backgroundImage': 'url(http://openweathermap.org/img/w/10d.png)'};
    const hidden={'display':'none'};
    return (
      <div className="container5" style={{'position':'relative'}}>
        <div className="logo5" id="logo5"></div>

      {
        Object.keys(this.state).map((val,index)=>{

          if (this.state[val].show=="none"){
            console.log("data1 ==> ",this.state[val].show);
            return (
              <div id={val} className="raspi" style={hidden} key={`raspi${index}`}>
                {this.state[val].show}
                <div className="raspi-weather" style={weather} key={`raspi-weather${index}`}></div>
                <div className="crossL" onClick={()=>{this.hide({index})}}>x</div>
              </div>
            )
          }
          else{
            console.log("data2 ==> ",this.state[val].show);
            return (
              <div id={val} className="raspi" key={`raspi${index}`}>
                <div className="raspi-weather" style={weather} key={`raspi-weather${index}`}></div>
                {this.state[val].text} - {this.state[val].show}
                <div className="crossL"  onClick={()=>{this.hide({index})}}>x</div>
              </div>
            )
          }


        })
      }

      <div id="blindserver" className="raspi" style={black}>Blind request waiting</div>
        <div id="box666" className="raspi">
              <div className="blindbutton" >+</div>
              <div className="blindbutton" >-</div>
              <div className="blindbutton" id="blindValue" style={black}>Go</div>
         </div>
      </div>
    )
  }
}


export default Testv5
