import React from "react";




class QuickTest extends React.Component{
  constructor(props) {
    super(props);
  }

render(){
console.log(this.props.data.display," %%%%%%%%%%");
        return (
          <div>
            <h1 style={{'color':'white'}}>ok</h1>
          </div>

        )
      }

}


export  {QuickTest}
