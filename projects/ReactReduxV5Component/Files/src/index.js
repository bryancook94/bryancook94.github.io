import React from "react";
import ReactDOM from "react-dom";
import Data from './data/data.json';
import { createStore  } from 'redux';
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import './css/main.css';
import './css/notificationstyles.css';
import {TwitterTest} from "./components/twitter_test.js";
import {WhatsappTest} from "./components/whatsapp_test.js";
import {ReedTest} from "./components/reed_test.js";
import {TwilioTest} from "./components/twilio_test.js";
import {QuickTest} from "./components/QuickTest.js";








class Presentational extends React.Component{
constructor(props){
  super(props)
}

render(){
  const TwiitterDataTest=Data.notification.twitter;
  const WhatsappDataTest=Data.notification.whatsapp;
  const ReedDataTest=Data.notification.reed;
  const TwilioDataTest=Data.notification.twilio;


  function testL(x){
    if(x.includes("auto")==true){
      return "auto"
    }
    else {return "none" }
  }
  function testR(x){
    if(x.includes("auto")==true){
      return "flex"
    }
    else {return "none" }
  }
  var Test1="";
  Object.entries(defaultstate.show.Twitter).forEach((a,b)=>{Test1+=a[1]});
  var Test2="";
  Object.entries(defaultstate.show.Whatsapp).forEach((a,b)=>{Test2+=a[1]});
  var Test3="";
  Object.entries(defaultstate.show.Reed).forEach((a,b)=>{Test3+=a[1]});
  var Test4="";
  Object.entries(defaultstate.show.Twilio).forEach((a,b)=>{Test4+=a[1]});

return (
  <div>

      <div id="a">

        <div className="container1" style={{'display':testL(Test1)}}>
          <div className="logo1" id="logo1"></div>
          <TwitterTest data={this.props.TwitterData}/>
        </div>

        <div className="container2" style={{'position':'relative','display':'flex','flexDirection':'column','alignItems':'flex-end','display':testR(Test2)}}>
        <div className="logo2" id="logo2"></div>
        <WhatsappTest data={this.props.WhatsappData}/>
        </div>

        <div className="container3" style={{'position':'relative','display':testL(Test3)}}>
        <div className="logo3" id="logo3"></div>
        <ReedTest data={this.props.ReedData}/>
        </div>

        <div className="container4" style={{'position':'relative','display':'flex','flexDirection':'column','alignItems':'flex-end','display':testR(Test4)}}>
        <div className="logo4" id="logo4"></div>
        <TwilioTest data={this.props.TwilioData}/>
        </div>

      </div>

      <div id="b"></div>

      <div id="c" >
          <p>video file</p>
          <div id="aftertimevideo" ></div>
      </div>


  </div>
)}

}


const HIDE = "HIDE";
const SHOW = "SHOW";
const  HideAC = (item,stream) => {
  return {
    type:HIDE,
    item,
    stream
  }
}
const  ShowAC = (item,stream) => {
  return {
    type:SHOW,
    item,
    stream
  }
}


var defaultstate={
      display:"auto",
      stream:"xxx",
      show:{
          "Twitter":{
                  "item0":"auto",
                  "item1":"auto",
                  "item2":"auto",
                  "item3":"auto",
                  "item4":"auto"
                },
          "Whatsapp":{
                  "item0":"auto",
                },
          "Reed":{
                  "item0":"auto",
                  "item1":"auto",
                  "item2":"auto",
                },
          "Twilio":{
                  "item0":"auto",
                }

      }
  }

const reducer = (state=defaultstate,action) => {
  switch(action.type){
    case HIDE:

            console.log("HIDE AC");
            var item="item"+action.item;
            var obj={};obj[item]="none";
            switch(action.stream){
                  case "Twitter":
                    return {display:"auto",stream:action.item,show:{"Twitter":Object.assign(state.show.Twitter,obj),
                    "Whatsapp":state.show.Whatsapp,
                    "Reed":state.show.Reed,
                    "Twilio":state.show.Twilio
                      }}
                    break;
                  case "Whatsapp":
                    return {display:"auto",stream:action.item,show:{"Twitter":state.show.Twitter,
                    "Whatsapp":Object.assign(state.show.Whatsapp,obj),
                    "Reed":state.show.Reed,
                    "Twilio":state.show.Twilio
                      }}
                    break;
                  case "Reed":
                    return {display:"auto",stream:action.item,show:{"Twitter":state.show.Twitter,
                    "Whatsapp":state.show.Whatsapp,
                    "Reed":Object.assign(state.show.Reed,obj),
                    "Twilio":state.show.Twilio
                      }}
                    break;
                  case "Twilio":
                    return {display:"auto",stream:action.item,show:{"Twitter":state.show.Twitter,
                    "Whatsapp":state.show.Whatsapp,
                    "Reed":state.show.Reed,
                    "Twilio":Object.assign(state.show.Twilio,obj)
                      }}
                    break;
              default:
                return state
                break;
            }
    break;
    case SHOW:
      console.log("SHOW AC");
      var obj={};obj[item]="auto";
      return {display:"auto",stream:action.item,show:{"Twitter":Object.assign(state.show.Twitter,obj)} }
    break;

    default:
        console.log("default");
        return state
        //return  Object.assign(state,{});
    break;

  }
}
const store=createStore(reducer,composeWithDevTools());

const mapStateToProps = (state) => {
  console.log(state,"><><><><><><",state.stream);
  return {
    TwitterData:{
        display:state.display,
        show:state.show.Twitter,
        nodedata:Data.notification.twitter
      },
    WhatsappData:{
        display:state.display,
        show:state.show.Whatsapp,
        nodedata:Data.notification.whatsapp
      },
    ReedData:{
        display:state.display,
        show:state.show.Reed,
        nodedata:Data.notification.reed
      },
    TwilioData:{
        display:state.display,
        show:state.show.Twilio,
        nodedata:Data.notification.twilio
      }
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    tweethide: (action,stream) => {
      dispatch(HideAC(action,stream));
    }
  }
};



const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational);

class Wrap extends React.Component{
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




ReactDOM.render(<Wrap/>,document.getElementById('root'))
