import React from "react";
import { connect } from "react-redux";
import { createStore  } from 'redux';



class WhatsappTestinner extends React.Component{
constructor(props){
    super(props);
this.close =this.close.bind(this);
}

close(val,stream){
this.props.tweethide(val,stream);
   console.log("clicked ==>",val,stream);
}


render(){
  const Loopdata=  Object.entries(this.props.data.nodedata);
//console.log("whatsapp",Loopdata);
//Loopdata.map((a,b)=>{console.log(a,'=>',b+1)} )


  return (
    Loopdata.map((a,b)=>{

      if(this.props.data.show["item"+b]!=="none"){
        return (
        <div id={`whatsapp{b+1}`} className='whatsapp' key={`whatsapp${b}`} style={{'display':this.props.data.show["item"+b]}}>
            {a[1].text}
            <div className='crossR' onClick={()=>{this.close(b,"Whatsapp") }}>x</div>
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

const WhatsappTest=connect(null,mapDispatchToProps)(WhatsappTestinner)


export  {WhatsappTest}
