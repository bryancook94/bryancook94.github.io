import React from "react";
import Data from "../data/data.json";

import  "../css/main.css";
import "../css/UIComponentv5.css";

import PHP from './PHP.js';
import Testv5 from './Testv5.js';
import API from './API.js';

/*
const Body = () => {
  return (
    <div style={{'color':'white'}}>
    <p>Hello</p>
    <Test/>
    </div>
  )
}
*/
class Body extends React.Component{
  constructor(props){
  super(props);
  this.state=Data
  this.project=this.project.bind(this);
};


project(){

  switch(this.state.projectsActive){
    case 0:
     this.setState((state)=>({projectsActive:1}));
     break;
   case 1:
    this.setState((state)=>({projectsActive:0}));
     break;
  default :
    this.setState((state)=>({projectsActive:1}));
    break;

  }
   }


render(){
  var a=this.state;
console.log("this state ==> ",a);
const state=this.state;
const project=this.project;
const {projectsActive}=this.state;
const button={
    'padding':'5px 20px',
    'width':'max-content',
    'border':'1px #10b68f solid',
    'background':'black',
    'color':'#e5eae9'
};
const ribbon_r={
'position':'absolute',
'height':'100px',
'width':'100px',
'overflow':'hidden',
'top':'-3px',
'right':'-3px'
}

const ribbon_l={
'position':'absolute',
'height':'100px',
'width':'100px',
'overflow':'hidden',
'top':'-3px',
'left':'-3px'
}
const ribbon_text_r={
  'textAlign': 'center',
  'color':'white',
  'textShadow':'1px 1px black',
  'backgroundImage': '-webkit-linear-gradient(top, #BFDC7A, #8EBF45)',
  'position': 'relative',
  'padding': '5px 26px',
  'top': '11px',
  'transform': 'rotate(45deg)',
  'right': '-28px'
}
const ribbon_text_l={
  'textAlign': 'center',
  'color':'white',
  'textShadow':'1px 1px black',
  'backgroundImage': '-webkit-linear-gradient(top, #BFDC7A, #8EBF45)',
  'position': 'relative',
  'padding': '5px 26px',
  'top': '11px',
  'transform': 'rotate(-45deg)',
  'left': '-28px'
}


var position=state["projects"][this.state.projectsActive]["features"]["position"];
var title=state["projects"][this.state.projectsActive]["features"]["title"];
var media=state["projects"][this.state.projectsActive]["features"]["media"];
var text=state["projects"][this.state.projectsActive]["features"]["text"];
var mediaType=state["projects"][this.state.projectsActive]["features"]["mediaType"];
var multipleimgs=state["projects"][this.state.projectsActive]["features"]["multipleimgs"];
var component=state["projects"][this.state.projectsActive]["features"]["component"];

  return (
      <div className="timeline">
      {
        position.map((val,index)=>(
          <div className={"container "+ position[index]} style={{margin:'0px'}}>
          <div className="content">

          {(
            multipleimgs[index]==1?
          <div className="ribbon" style={(position[index]=="right"?ribbon_r:ribbon_l)}>
            <div className="ribbon_text" style={(position[index]=="right"?ribbon_text_r:ribbon_text_l)}>
              <strong>Hover</strong>
            </div>
          </div>:
          console.log('No extra images')
        )}

              {
                //adding a link to react-redux component page
                (projectsActive==1?<h2>{title[index]}</h2>:<h2><a href="./ReactReduxV5Component" style={{'font-size':'1em'}}>{title[index]}</a></h2>)
              }

            <div style={{'position':'relative'}}>
              {(
                mediaType[index]=="image"?
                      /*Start of adding extra content feature ==> could write this better*/
                      (multipleimgs[index]==1?
                        <span>
                        <img src={media[index]} alt="image" width="100%"/>
                        <div className="containerinner-d">
                            <div className="containerinner-a"></div>
                            <div className="containerinner-b"></div>
                            <div className="containerinner-c btn"></div>
                        </div>
                        </span>:component[index]==1?
                                <Testv5/>:(component[index]==2?<PHP/>:<img src={media[index]} alt="image" width="100%"/>)

                      ):
                      /*End of adding extra content feature ==> could write this better*/
                mediaType[index]=="video"?
                      <video width="100%" height="240" controls>
                        <source src={media[index]} type="video/mp4"/>
                      </video>:
                      console.log('No media for ',index)
             )}
             </div>

             {(index==0?<div  style={button} onClick={() => project()}>Next Project</div>:<p>{text[index]}</p>)}

          </div>
          </div>
        ))
      }
      </div>


  )
}

}


export {Body}
