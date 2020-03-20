import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentDidUpdate() {
    console.log(this.timerID)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <h1>{this.state.date.toLocaleString()}</h1>
    )
  }
}

export default Header;
