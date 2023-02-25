import React, { Component } from 'react'

export default class ComponentA extends Component {
  constructor(){
    super();
    this.state = {
      name:"Nikhil"
    }
  }

  updateName(e){
    // const {target:{value}} = e;
    const {value} = e.target;
    console.log(value);
    this.setState({name:value})
  }

  
  render() {
    // arrow fn decalaration
    const updateName = e=>{
      // const {target:{value}} = e;
      const {value} = e.target;
      console.log(value);
      this.setState({name:value})
    }
  
    const { msg } = this.props;
    const {name} = this.state;

    return (
      <div>
        <h1>{msg}</h1>
        <input type="text" placeholder='Enter name' onChange={this.updateName.bind(this)}/>
        {/* <input type="text" placeholder='Enter name' onChange={updateName}/> */}
        <h1>Hello {name}</h1>
      </div>
    )
  }
}
