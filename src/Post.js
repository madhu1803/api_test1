import React, { Component } from "react";
import axios from "axios";
export default class Get extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    axios({
      method: "post",
      url: "https://gprs-api.geopits.com/auth/login/",
      data: {
        login_username: "+918667288273",
        method_of_login: "phone_otp",
        password: "ajai@geopits.com",
        platform: "my_track",
      },
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
