import axios from 'axios';
import React, { Component } from 'react'

export default class ComponentA extends Component {
  constructor() {
    console.log("initialisation");
    super();
    this.state = {
      name: "Nikhil",
      id: 1,
      userData: null
    }
    this.BASE_URL = "https://jsonplaceholder.typicode.com/users/";
  }

  updateName(e) {
    // const {target:{value}} = e;
    const { value } = e.target;
    console.log(value);
    this.setState({ name: value })
  }


  render() {
    const { id } = this.state;
    console.log("render", id);
    // arrow fn decalaration
    const updateName = e => {
      // const {target:{value}} = e;
      const { value } = e.target;
      console.log(value);
      this.setState({ name: value })
    }

    const { msg } = this.props;
    const { name } = this.state;
    return (
      <React.Fragment>
        <h1>{msg}</h1>
        <input type="text" placeholder='Enter name' onChange={this.updateName.bind(this)} />
        <input type="number" placeholder='id' onChange={({ target: { value } }) => this.setState({ id: value })} />
        {/* <input type="text" placeholder='Enter name' onChange={updateName}/> */}
        <h1> Hello {name}, {this.id}</h1>
      </React.Fragment >
    )
  }

  async componentDidMount() {
    console.log("componentDidMount");
    document.title = "Learning React";
    const { id } = this.state;
    const { data } = await axios.get(this.BASE_URL + id);
    console.log(data);
    this.setState({ userData: data })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log({nextProps});
    console.log({nextState});
    return this.state.id !== nextState.id || this.props.msg !==nextProps.msg;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate")
  }

  async componentDidUpdate() {
    const { id } = this.state;
    console.log("componentDidUpdate", id);
    const { data } = await axios.get(this.BASE_URL + id);
    console.log(data);
    this.setState({ userData: data, name: data.name })
  }

  componentWillUnmount(){
    console.log("unmounting stage");
  }

}
