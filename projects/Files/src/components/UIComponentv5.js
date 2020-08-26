import React from "react";


const SHOW = "SHOW";
const  showAC = (item) => {
  return {
    type:SHOW,
    item
  }
}
var raspitree={
    raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"auto"},
    raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":"auto"},
    raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"auto"},
    raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":"auto"},
    raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":"auto"},
  }
const reducer = (state=raspitree,action) => {
  switch(action.type){
    case SHOW:
        console.log("SHOW REDUCER CALLED ==>",action.item);
        switch(action.item){
          case "raspi1":
            return {
              raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"none"},
              raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":state.raspi2.show},
              raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi3.show},
              raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":state.raspi4.show},
              raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":state.raspi5.show}
            }
            break;
          case "raspi2":
            return {
              raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi1.show},
              raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":"none"},
              raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi3.show},
              raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":state.raspi4.show},
              raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":state.raspi5.show}
            }
            break;
          case "raspi3":
            return {
              raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi1.show},
              raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":state.raspi2.show},
              raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"none"},
              raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":state.raspi4.show},
              raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":state.raspi5.show}
            }
            break;
          case "raspi4":
            return {
              raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi1.show},
              raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":state.raspi2.show},
              raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi3.show},
              raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":"none"},
              raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":state.raspi5.show}
            }
            break;
          case "raspi5":
            return {
              raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi1.show},
              raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":state.raspi2.show},
              raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":state.raspi3.show},
              raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":state.raspi4.show},
              raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":"none"}
            }
            break;
          default:
            return {
              raspi1:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"auto"},
              raspi2:{"text":"12:00 PM Mon - 17℃ overcast clouds","img":"","show":"auto"},
              raspi3:{"text":"03:00 PM Mon - 19℃ light rain","img":"","show":"auto"},
              raspi4:{"text":"06:00 PM Mon - 18℃ light rain","img":"","show":"auto"},
              raspi5:{"text":"09:00 PM Moxxxxxn - 14℃ overcast clouds","img":"","show":"auto"}
            }
            break;
        }
    break;

    default:
        console.log("default");
        return  Object.assign(state,{});
    break;

  }
}
const store=Redux.createStore(reducer);
//console.log(store.dispatch(showAC()));
console.log(store.getState());



const Provider =ReactRedux.Provider;
const Connect = ReactRedux.connect;


class Presentational extends React.Component{
constructor(props){
  super(props);
  this.hider=this.hider.bind(this);
}

hider(pass){
  console.log("MF");
  this.props.goodbye(pass);
  console.log("MF called => ",store.getState());

}
/*
need to use the data passed to the component !!!
not raspitreee which is defined globally
*/
  render(){
    const black={'color':'black'};
    const data=this.props.test;
    const weather={'background-image': 'url(http://openweathermap.org/img/w/10d.png)'};
    const hidden={'display':'none'};
    return (
      <div className="container5" style={{'position':'relative'}}>
        <div className="logo5" id="logo5"></div>

      {
        Object.keys(data).map((val,index)=>{

          if (data[val].show=="none"){
            console.log("data1 ==> ",data[val].show);
            return (
              <div id={val} className="raspi" style={hidden}>
                <div className="raspi-weather" style={weather}></div>
                {data[val].show}
                <div className="crossL" onClick={()=>{this.hider(val)} } >x</div>
              </div>
            )
          }
          else{
            console.log("data2 ==> ",data[val].show);
            return (
              <div id={val} className="raspi">
                <div className="raspi-weather" style={weather}></div>
                {data[val].text} - {data[val].show}
                <div className="crossL" onClick={()=>{this.hider(val)} } >x</div>
              </div>
            )
          }


        })
      }

      <div id="blindserver" class="raspi" style={black}>Blind request waiting</div>
        <div id="box666" className="raspi">
              <div id="blindinfo">Blind position</div>
              <div className="blindbutton" >Up</div>
              <div className="blindbutton" >down</div>
              <div className="blindbutton" id="blindValue" style={black}>Go</div>
         </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    test:state
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
    goodbye:(item)=>{
      dispatch(showAC(item))
    }

  }
}
const Container =Connect(mapStateToProps,mapDispatchToProps)(Presentational);

class AppComp extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <Provider store={store}>
     <Container/>
    </Provider>
    )
  }

}

export  default AppComp

//ReactDOM.render(<App/>,document.getElementById('render'));
