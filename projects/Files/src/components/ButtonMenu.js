import React from "react";

class ButtonMenu extends React.Component{
constructor(props){
  super(props);
  this.myFunction=this.myFunction.bind(this);
}

myFunction(){
  document.getElementById('option0').classList.toggle("change");
  document.getElementById('menuContent').classList.toggle("underChange");
}

render(){
        return (
        <div id="option0" class="option0" onClick={this.myFunction}>
          <div class="menubar menubar1" id="menubar1"></div>
          <div class="menubar menubar2" id="menubar2"></div>
          <div class="menubar menubar3" id="menubar3"></div>
        </div>
            )
}

}


export{ButtonMenu}
