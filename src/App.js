import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://gprs-api.geopits.com/workflow/invoices/",
      // data: {
      //   firstName: "Fred",
      //   lastName: "Flintstone",
      // },
      headers: { Authorization: "sessionid i6vegvvlgoxagv5mdaarhudj42wrrrsp" },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          results: response.data.results,
        });
        console.log(this.state.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.results.map((result) => (
          <p>
            Hello, {result.name} from {result.slug}!
          </p>
        ))}
      </div>
    );
  }
}
