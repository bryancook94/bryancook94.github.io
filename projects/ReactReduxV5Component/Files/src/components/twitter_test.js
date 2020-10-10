import React from "react";
import { connect } from "react-redux";
import { createStore  } from 'redux';



class TwitterTestinner extends React.Component {
  constructor(props) {
    super(props);
    this.close =this.close.bind(this);
  }
close(val,stream){
this.props.tweethide(val,stream);
   console.log("clicked ==>",val,stream);
}



//console.log(Loopdata);
//Loopdata.map((a,b)=>{console.log(a,'=>',b+1)} )
render(){
    const Loopdata=  Object.entries(this.props.data.nodedata);
//    console.log(this.props);

    return (
                Loopdata.map((a,b)=>{

                if(this.props.data.show["item"+b]!=="none"){
                  return (
                  <div id={`twitter${b+1}`} className='twitter' key={`twitter${b}`} style={{'display':this.props.data.show["item"+b]}}>
                        {a[1].text}
                        <div id={`twitter${b+1}-inner`}>
                            <div id={`twitter${b+1}-handle`}>{a[1].handle}</div>
                            <div id={`twitter${b+1}-time`}>{a[1].time}</div>
                        </div>
                        <div className='crossL' onClick={()=>{this.close(b,"Twitter") }}>x</div>
                    </div>
                        )
                }


              })
            )
          }

}



const HIDE = "HIDE";
const  HideAC = (item,stream) => {
  return {
    type:HIDE,
    item,
    stream
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    tweethide: (action,stream) => {
      dispatch(HideAC(action,stream));
    }
  }
};

const TwitterTest=connect(null,mapDispatchToProps)(TwitterTestinner)

export {TwitterTest}
