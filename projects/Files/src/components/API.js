import React from 'react';
import axios from 'axios';

class API extends React.Component {
  constructor(props){
  super(props);
  this.state = {
                  email: 'xxx'
                }
};


  componentDidMount() {
    axios.get(`https://randomuser.me/api/`)
         .then(res => {
              const persons = res.data;
              console.log("====>",persons['results'][0]['email']);
              this.setState({ email:persons['results'][0]['email'] });
            })
         }

  render() {
    return (
      <p hidden id="apitest">
        {this.state.email}
      </p>
    )
  }
}


export default API
