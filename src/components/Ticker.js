import React, { Component } from "react";

export class Ticker extends Component {
  constructor() {
    super();
    this.pair = "XETHZEUR";
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`https://api.kraken.com/0/public/Ticker?pair=${this.pair}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
          price: json["result"][this.pair].p[0]
        });
      });
  }

  render() {
    return (
      <div>
        {this.pair} volume weighted average price (today) :{" "}
        <span>{this.state.price}</span>
      </div>
    );
  }
}
